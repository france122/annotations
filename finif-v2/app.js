const items = window.FINIF_ITEMS || [];
const batchId = items[0]?.review_batch_id || 'staged20-20260918';
const exportId = 'expert-review-100-20260920';
const experiments = {
  quality: {
    label: '实验一：数据质量',
    promptHint: '请根据完整 prompt、task 和 work product，只评价题目本身，不评价模型回答。',
    constraintsHint: '以下为生成时规划的 constraints，供理解样本使用；它们不是已经过人类验证的抽取标注。',
    ratingHint: '完成五项 1-5 分评分，并选择 AC 或 RJ。每个维度的 5 分代表完全满足，1 分代表严重不足。',
    dims: [
      ['context_task_fit_1to5', 'Context-task fit', '提供的 context 是否足以支持指定 task 和 work product。'],
      ['financial_plausibility_1to5', 'Financial plausibility', '任务是否符合真实金融业务场景和工作流程。'],
      ['evidence_support_1to5', 'Evidence support', 'query 中的要求是否都能从 context 找到依据。'],
      ['scope_consistency_1to5', 'Scope consistency', '实体、时间、产品、人群、交易和数据口径是否保持一致。'],
      ['query_clarity_naturalness_1to5', 'Query clarity and naturalness', 'query 是否清楚、连贯、自然且可以直接执行。']
    ],
    decision: true
  },
  constraint: {
    label: '实验二：Constraint 抽取',
    promptHint: '请根据 query 与下方已有清单，评价这份 constraint 清单的整体质量。',
    constraintsHint: '这是 Stage 1 生成时规划的 constraints。请勿新增、重写或修改任何 constraint，只评价现有清单整体质量。',
    ratingHint: '完成三项 1-5 分评分即可；本实验没有 AC/RJ，也不要求专家自行编写 constraint。',
    dims: [
      ['faithfulness_1to5', '忠实性', 'constraints 是否准确对应 query，条件、范围、数值和否定是否保持一致。'],
      ['completeness_1to5', '完整性', 'constraint 清单是否覆盖 query 中明确、可检查的要求。'],
      ['independence_1to5', '独立性', '每条 constraint 是否划分合理，避免重复计数或把多个要求混在一起。']
    ],
    decision: false
  }
};

let current = 0;
let mode = localStorage.getItem('finif_review_mode') || 'quality';
let annotator = localStorage.getItem('finif_annotator') || 'A1';
if (!experiments[mode]) mode = 'quality';

const itemList = document.getElementById('itemList');
const metaGrid = document.getElementById('metaGrid');
const fullPromptText = document.getElementById('fullPromptText');
const copyPromptBtn = document.getElementById('copyPromptBtn');
const copyPromptStatus = document.getElementById('copyPromptStatus');
let copyRequest = 0;

copyPromptBtn.addEventListener('click', async () => {
  const text = items[current]?.full_prompt || '';
  const request = ++copyRequest;
  if (!text) { copyPromptStatus.textContent = '当前没有可复制的 Prompt。'; return; }
  copyPromptBtn.disabled = true;
  try {
    await navigator.clipboard.writeText(text);
    if (request === copyRequest) copyPromptStatus.textContent = '已复制完整 Prompt';
  } catch {
    if (request === copyRequest) copyPromptStatus.textContent = '复制失败，请允许剪贴板权限，或手动选中文本复制。';
  } finally {
    if (request === copyRequest) copyPromptBtn.disabled = false;
  }
});
const constraintsBox = document.getElementById('constraintsBox');
const ratingForm = document.getElementById('ratingForm');
const commentsInput = document.getElementById('commentsInput');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const itemCounter = document.getElementById('itemCounter');
const annotatorSelect = document.getElementById('annotatorSelect');
const modeSummary = document.getElementById('modeSummary');
const modeQuality = document.getElementById('modeQuality');
const modeConstraint = document.getElementById('modeConstraint');
annotatorSelect.value = annotator;

function config() { return experiments[mode]; }
function itemBatch(item) { return item.review_batch_id || batchId; }
function key(id = items[current]?.item_id) {
  const item = items.find(row => row.item_id === id);
  return `finif_${item ? itemBatch(item) : batchId}_${mode}_${annotator}_${id}`;
}
function blankRecord(item) {
  const record = { annotator_id: annotator, review_batch_id: itemBatch(item), mode, item_id: item.item_id, comments: '', updated_at: '' };
  config().dims.forEach(([field]) => { record[field] = ''; });
  if (config().decision) record.decision = '';
  return record;
}
function getRecord(item) {
  const raw = localStorage.getItem(key(item.item_id));
  const base = blankRecord(item);
  try { return raw ? { ...base, ...JSON.parse(raw) } : base; } catch { return base; }
}
function saveRecord(item, record) {
  record.annotator_id = annotator;
  record.item_id = item.item_id;
  record.review_batch_id = itemBatch(item);
  record.mode = mode;
  record.updated_at = new Date().toISOString();
  localStorage.setItem(key(item.item_id), JSON.stringify(record));
  renderList();
  updateProgress();
}
function escapeHtml(text) { return String(text || '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch])); }
function isComplete(item) {
  const record = getRecord(item);
  return config().dims.every(([field]) => String(record[field] || '').trim() !== '') && (!config().decision || ['AC', 'RJ'].includes(record.decision));
}
function renderList() {
  itemList.innerHTML = items.map((item, idx) => `<button class="item-chip ${idx === current ? 'active' : ''} ${isComplete(item) ? 'complete' : ''}" data-idx="${idx}" type="button"><span class="chip-no">${item.sample_no}. ${escapeHtml(item.item_id)}</span><span class="chip-title">${escapeHtml(item.workflow)}</span></button>`).join('');
  itemList.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { current = Number(btn.dataset.idx); render(); }));
}
function updateProgress() {
  const done = items.filter(isComplete).length;
  progressText.textContent = `${done} / ${items.length}`;
  progressBar.style.width = `${items.length ? done / items.length * 100 : 0}%`;
}
function renderMeta(item) {
  const pairs = [['Workflow', item.workflow], ['Task', item.task], ['Work product', item.work_product], ['Item ID', item.item_id], ['约束计划 / 目标', `${item.constraints.length} / ${item.target_constraint_count}`]];
  metaGrid.innerHTML = pairs.map(([label, value]) => `<div class="meta"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
}
function renderConstraints(item) {
  constraintsBox.innerHTML = item.constraints.map(c => `<div class="constraint"><div class="constraint-head"><span>${c.no}. [${escapeHtml(c.tag)}] ${escapeHtml(c.family)}</span><span class="badge">${escapeHtml(c.check_type)}</span></div><p>${escapeHtml(c.text)}</p></div>`).join('');
}
function renderRatings(item) {
  const record = getRecord(item);
  ratingForm.innerHTML = config().dims.map(([field, label, help]) => `<div class="rating-row"><label>${label}</label><p class="dimension-help">${help}</p><div class="score-buttons" data-field="${field}">${[1,2,3,4,5].map(score => `<button type="button" class="${Number(record[field]) === score ? 'selected' : ''}" data-score="${score}">${score}</button>`).join('')}</div></div>`).join('') + (config().decision ? `<div class="flag-group"><div class="flag-row" data-field="decision"><div class="flag-label">总体裁决</div><button type="button" class="${record.decision === 'AC' ? 'selected' : ''}" data-value="AC">AC</button><button type="button" class="${record.decision === 'RJ' ? 'selected' : ''}" data-value="RJ">RJ</button></div></div>` : '');
  commentsInput.value = record.comments || '';
  ratingForm.querySelectorAll('.score-buttons button').forEach(btn => btn.addEventListener('click', () => {
    const next = getRecord(item);
    next[btn.parentElement.dataset.field] = btn.dataset.score;
    saveRecord(item, next);
    renderRatings(item);
  }));
  ratingForm.querySelectorAll('.flag-row button').forEach(btn => btn.addEventListener('click', () => {
    const next = getRecord(item);
    next.decision = btn.dataset.value;
    saveRecord(item, next);
    renderRatings(item);
  }));
}
function renderMode() {
  const currentConfig = config();
  modeSummary.textContent = currentConfig.label;
  document.getElementById('promptHint').textContent = currentConfig.promptHint;
  document.getElementById('constraintsHint').textContent = currentConfig.constraintsHint;
  document.getElementById('ratingTitle').textContent = currentConfig.label;
  document.getElementById('ratingHint').textContent = currentConfig.ratingHint;
  modeQuality.classList.toggle('selected', mode === 'quality');
  modeConstraint.classList.toggle('selected', mode === 'constraint');
}
function render() {
  const item = items[current];
  if (!item) return;
  itemCounter.textContent = `${current + 1} / ${items.length}`;
  document.getElementById('jumpInput').value = current + 1;
  renderMode();
  renderMeta(item);
  fullPromptText.textContent = item.full_prompt || '';
  copyRequest++;
  copyPromptBtn.disabled = !item.full_prompt;
  copyPromptStatus.textContent = '';
  renderConstraints(item);
  renderRatings(item);
  renderList();
  updateProgress();
}

commentsInput.addEventListener('input', () => { const item = items[current]; const record = getRecord(item); record.comments = commentsInput.value; saveRecord(item, record); });
document.getElementById('prevBtn').addEventListener('click', () => { current = Math.max(0, current - 1); render(); });
document.getElementById('nextBtn').addEventListener('click', () => { current = Math.min(items.length - 1, current + 1); render(); });
document.getElementById('jumpForm').addEventListener('submit', event => {
  event.preventDefault();
  const number = Number(document.getElementById('jumpInput').value);
  if (Number.isInteger(number) && number >= 1 && number <= items.length) { current = number - 1; render(); }
});
document.getElementById('newItemsBtn').addEventListener('click', () => { current = Math.min(20, items.length - 1); render(); });
annotatorSelect.addEventListener('change', () => { annotator = annotatorSelect.value; localStorage.setItem('finif_annotator', annotator); render(); });
function setMode(nextMode) { mode = nextMode; localStorage.setItem('finif_review_mode', mode); render(); }
modeQuality.addEventListener('click', () => setMode('quality'));
modeConstraint.addEventListener('click', () => setMode('constraint'));
function csvCell(value) { return `"${String(value ?? '').replace(/"/g, '""')}"`; }
function downloadCsv() {
  const currentConfig = config();
  const header = ['review_batch_id', 'mode', 'sample_no', 'item_id', 'annotator_id', 'workflow', 'task', 'work_product', 'constraint_count', ...currentConfig.dims.map(d => d[0])];
  if (currentConfig.decision) header.push('decision'); else header.push('constraint_mean_1to5');
  header.push('comments', 'updated_at');
  const lines = [header.join(',')];
  items.forEach(item => {
    const record = getRecord(item);
    const scores = currentConfig.dims.map(([field]) => record[field] || '');
    const result = currentConfig.decision ? record.decision : (scores.every(Boolean) ? (scores.reduce((sum, value) => sum + Number(value), 0) / scores.length).toFixed(2) : '');
    lines.push([itemBatch(item), mode, item.sample_no, item.item_id, annotator, item.workflow, item.task, item.work_product, item.constraints.length, ...scores, result, record.comments || '', record.updated_at || ''].map(csvCell).join(','));
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `finif_${exportId}_${mode}_${annotator}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
document.getElementById('downloadBtn').addEventListener('click', downloadCsv);
render();
