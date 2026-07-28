const items = window.FINIF_ITEMS || [];
const dims = [
  ['instruction_coherence_1to5', '指令清晰与逻辑连贯性'],
  ['operational_plausibility_1to5', '金融工作场景合理性'],
  ['context_support_1to5', '上下文支撑程度'],
  ['constraint_clarity_1to5', '约束清晰度'],
  ['constraint_relevance_1to5', '约束相关性']
];
const flags = [
  ['unsupported_regulation_like_context', '是否存在“像法规/规则但缺少来源”的 context？'],
  ['template_like_or_weak_constraint', '是否存在“模板化/弱相关”的 constraint？']
];
let current = 0;
let annotator = localStorage.getItem('finif_annotator') || 'A1';

const itemList = document.getElementById('itemList');
const metaGrid = document.getElementById('metaGrid');
const instructionText = document.getElementById('instructionText');
const fullPromptText = document.getElementById('fullPromptText');
const sourcesBox = document.getElementById('sourcesBox');
const constraintsBox = document.getElementById('constraintsBox');
const ratingForm = document.getElementById('ratingForm');
const commentsInput = document.getElementById('commentsInput');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const itemCounter = document.getElementById('itemCounter');
const annotatorSelect = document.getElementById('annotatorSelect');

annotatorSelect.value = annotator;

function key(id = items[current]?.item_id) {
  return `finif_module_a_${annotator}_${id}`;
}

function blankRecord(item) {
  return {
    annotator_id: annotator,
    item_id: item.item_id,
    instruction_coherence_1to5: '',
    operational_plausibility_1to5: '',
    context_support_1to5: '',
    constraint_clarity_1to5: '',
    constraint_relevance_1to5: '',
    unsupported_regulation_like_context: '',
    template_like_or_weak_constraint: '',
    comments: ''
  };
}

function getRecord(item) {
  const raw = localStorage.getItem(key(item.item_id));
  const base = blankRecord(item);
  return raw ? { ...base, ...JSON.parse(raw) } : base;
}

function saveRecord(item, record) {
  record.annotator_id = annotator;
  record.item_id = item.item_id;
  localStorage.setItem(key(item.item_id), JSON.stringify(record));
  renderList();
  updateProgress();
}

function escapeHtml(text) {
  return String(text || '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function isComplete(item) {
  const r = getRecord(item);
  return dims.every(([field]) => String(r[field] || '').trim() !== '');
}

function renderList() {
  itemList.innerHTML = items.map((item, idx) => `
    <button class="item-chip ${idx === current ? 'active' : ''} ${isComplete(item) ? 'complete' : ''}" data-idx="${idx}" type="button">
      <span class="chip-no">${item.sample_no}. ${escapeHtml(item.item_id)}${isComplete(item) ? ' · 已填' : ''}</span>
      <span class="chip-title">${escapeHtml(item.workflow)}</span>
    </button>
  `).join('');
  itemList.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      current = Number(btn.dataset.idx);
      render();
    });
  });
}

function updateProgress() {
  const done = items.filter(isComplete).length;
  progressText.textContent = `${done} / ${items.length}`;
  progressBar.style.width = `${items.length ? done / items.length * 100 : 0}%`;
}

function renderMeta(item) {
  const pairs = [
    ['Workflow', item.workflow],
    ['Task', item.task],
    ['Work product', item.work_product],
    ['Item ID', item.item_id]
  ];
  metaGrid.innerHTML = pairs.map(([label, value]) => `
    <div class="meta"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>
  `).join('');
}

function renderSources(item) {
  sourcesBox.innerHTML = item.sources.map(src => `
    <div class="source">
      <div class="source-head">
        <span>${escapeHtml(src.label)} · ${escapeHtml(src.title)}</span>
        ${src.provenance ? '<span class="badge">有来源溯源</span>' : '<span class="badge muted-badge">无来源溯源</span>'}
      </div>
      <p>${escapeHtml(src.content)}</p>
    </div>
  `).join('');
}

function renderConstraints(item) {
  constraintsBox.innerHTML = item.constraints.map(c => `
    <div class="constraint">
      <div class="constraint-head">
        <span>${c.no}. [${escapeHtml(c.tag)}] ${escapeHtml(c.family)}</span>
        <span class="badge">${escapeHtml(c.check_type)}</span>
      </div>
      <p>${escapeHtml(c.text)}</p>
    </div>
  `).join('');
}

function renderRatings(item) {
  const record = getRecord(item);
  ratingForm.innerHTML = dims.map(([field, label]) => `
    <div class="rating-row">
      <label>${label}</label>
      <div class="score-buttons" data-field="${field}">
        ${[1,2,3,4,5].map(score => `<button type="button" class="${Number(record[field]) === score ? 'selected' : ''}" data-score="${score}">${score}</button>`).join('')}
      </div>
    </div>
  `).join('') + `
    <div class="flag-group">
      ${flags.map(([field, label]) => `
        <div class="flag-row" data-field="${field}">
          <div class="flag-label">${label}</div>
          <button type="button" class="${record[field] === 'Yes' ? 'selected' : ''}" data-value="Yes">是</button>
          <button type="button" class="${record[field] === 'No' ? 'selected' : ''}" data-value="No">否</button>
        </div>
      `).join('')}
    </div>
  `;
  commentsInput.value = record.comments || '';
  ratingForm.querySelectorAll('.score-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.parentElement.dataset.field;
      const next = getRecord(item);
      next[field] = btn.dataset.score;
      saveRecord(item, next);
      renderRatings(item);
    });
  });
  ratingForm.querySelectorAll('.flag-row button').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.parentElement.dataset.field;
      const next = getRecord(item);
      next[field] = btn.dataset.value;
      saveRecord(item, next);
      renderRatings(item);
    });
  });
}

function render() {
  const item = items[current];
  if (!item) return;
  itemCounter.textContent = `${current + 1} / ${items.length}`;
  renderMeta(item);
  instructionText.textContent = item.instruction || '';
  fullPromptText.textContent = item.full_prompt || '';
  renderSources(item);
  renderConstraints(item);
  renderRatings(item);
  renderList();
  updateProgress();
}

commentsInput.addEventListener('input', () => {
  const item = items[current];
  const record = getRecord(item);
  record.comments = commentsInput.value;
  saveRecord(item, record);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  current = Math.max(0, current - 1);
  render();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  current = Math.min(items.length - 1, current + 1);
  render();
});

annotatorSelect.addEventListener('change', () => {
  annotator = annotatorSelect.value;
  localStorage.setItem('finif_annotator', annotator);
  render();
});

function csvCell(value) {
  const text = String(value ?? '');
  return `"${text.replace(/"/g, '""')}"`;
}

function downloadCsv() {
  const header = ['sample_no','annotator_id','item_id','workflow','task','work_product','constraint_count',...dims.map(d => d[0]),...flags.map(f => f[0]),'comments'];
  const lines = [header.join(',')];
  items.forEach(item => {
    const r = getRecord(item);
    const row = [
      item.sample_no, annotator, item.item_id, item.workflow, item.task, item.work_product, item.constraints.length,
      ...dims.map(([field]) => r[field] || ''), ...flags.map(([field]) => r[field] || ''), r.comments || ''
    ];
    lines.push(row.map(csvCell).join(','));
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `finif_module_A_${annotator}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

document.getElementById('downloadBtn').addEventListener('click', downloadCsv);

render();
