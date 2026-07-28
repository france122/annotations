const items = window.FINIF_ITEMS || [];
const dims = [
  ['instruction_realism_1to5', '任务真实性'],
  ['context_support_1to5', '上下文支撑程度'],
  ['constraint_clarity_1to5', '约束清晰度'],
  ['constraint_relevance_1to5', '约束相关性']
];
let current = 0;
let annotator = localStorage.getItem('finif_annotator') || 'A1';

const itemList = document.getElementById('itemList');
const metaGrid = document.getElementById('metaGrid');
const instructionText = document.getElementById('instructionText');
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
    instruction_realism_1to5: '',
    context_support_1to5: '',
    constraint_clarity_1to5: '',
    constraint_relevance_1to5: '',
    comments: ''
  };
}

function getRecord(item) {
  const raw = localStorage.getItem(key(item.item_id));
  return raw ? JSON.parse(raw) : blankRecord(item);
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
      <span class="chip-no">${item.sample_no}. ${escapeHtml(item.item_id)}</span>
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
        ${src.provenance ? '<span class="badge">provenance</span>' : ''}
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
  `).join('');
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
}

function render() {
  const item = items[current];
  if (!item) return;
  itemCounter.textContent = `${current + 1} / ${items.length}`;
  renderMeta(item);
  instructionText.textContent = item.instruction || '';
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
  const header = ['sample_no','annotator_id','item_id','workflow','task','work_product','constraint_count',...dims.map(d => d[0]),'comments'];
  const lines = [header.join(',')];
  items.forEach(item => {
    const r = getRecord(item);
    const row = [
      item.sample_no, annotator, item.item_id, item.workflow, item.task, item.work_product, item.constraints.length,
      ...dims.map(([field]) => r[field] || ''), r.comments || ''
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
