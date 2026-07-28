const moduleB = window.FINIF_MODULE_B || { summary: {}, items: [] };
const items = moduleB.items || [];
const flat = [];
items.forEach((item, itemIdx) => {
  (item.constraints || []).forEach((constraint, constraintIdx) => {
    flat.push({ itemIdx, constraintIdx, item, constraint });
  });
});

let current = 0;
let annotator = localStorage.getItem('finif_module_b_annotator') || 'A1';

const itemList = document.getElementById('itemList');
const summaryBox = document.getElementById('summaryBox');
const metaGrid = document.getElementById('metaGrid');
const fullPromptText = document.getElementById('fullPromptText');
const responseText = document.getElementById('responseText');
const constraintsBox = document.getElementById('constraintsBox');
const constraintFocus = document.getElementById('constraintFocus');
const ratingForm = document.getElementById('ratingForm');
const commentsInput = document.getElementById('commentsInput');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const itemCounter = document.getElementById('itemCounter');
const annotatorSelect = document.getElementById('annotatorSelect');
annotatorSelect.value = annotator;

function escapeHtml(text) {
  return String(text ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function pct(x) {
  return `${(Number(x || 0) * 100).toFixed(2)}%`;
}

function key(row = flat[current]) {
  return `finif_module_b_${annotator}_${row.item.item_id}_${row.constraint.constraint_index}`;
}

function blankRecord(row) {
  return {
    annotator_id: annotator,
    item_id: row.item.item_id,
    constraint_index: row.constraint.constraint_index,
    route: row.constraint.route,
    auto_label: row.constraint.label,
    human_score_PASS_FAIL: '',
    auto_correct_YesNo: '',
    confidence_1to5: '',
    comments: ''
  };
}

function getRecord(row = flat[current]) {
  const raw = localStorage.getItem(key(row));
  const base = blankRecord(row);
  return raw ? { ...base, ...JSON.parse(raw) } : base;
}

function saveRecord(row, record) {
  record.annotator_id = annotator;
  record.item_id = row.item.item_id;
  record.constraint_index = row.constraint.constraint_index;
  record.route = row.constraint.route;
  record.auto_label = row.constraint.label;
  localStorage.setItem(key(row), JSON.stringify(record));
  updateProgress();
  renderList();
}

function isComplete(row) {
  const r = getRecord(row);
  return r.human_score_PASS_FAIL && r.auto_correct_YesNo;
}

function renderSummary() {
  const s = moduleB.summary || {};
  const byRoute = s.by_route || {};
  summaryBox.innerHTML = `
    <div class="summary-title">自动评测结果</div>
    <div class="metric"><span>CSR</span><strong>${pct(s.csr)}</strong><em>${s.passed_constraints || 0}/${s.total_constraints || 0}</em></div>
    <div class="metric"><span>ISR</span><strong>${pct(s.isr)}</strong><em>${s.exact_item_passed || 0}/${s.items || 0}</em></div>
    ${Object.entries(byRoute).map(([route, v]) => `
      <div class="metric small"><span>${escapeHtml(route)} CSR</span><strong>${pct(v.csr)}</strong><em>${v.passed}/${v.total}</em></div>
    `).join('')}
  `;
}

function renderList() {
  const itemDone = items.map((item, idx) => {
    const rows = flat.filter(r => r.itemIdx === idx);
    return rows.filter(isComplete).length;
  });
  itemList.innerHTML = items.map((item, idx) => {
    const rows = flat.filter(r => r.itemIdx === idx);
    const active = flat[current]?.itemIdx === idx;
    return `
      <button class="item-chip ${active ? 'active' : ''} ${itemDone[idx] === rows.length ? 'complete' : ''}" data-item-idx="${idx}" type="button">
        <span class="chip-no">${idx + 1}. ${escapeHtml(item.item_id)}</span>
        <span class="chip-title">${itemDone[idx]} / ${rows.length} · CSR ${(item.item_csr * 100).toFixed(1)}%</span>
      </button>
    `;
  }).join('');
  itemList.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.itemIdx);
      current = flat.findIndex(r => r.itemIdx === idx);
      render();
    });
  });
}

function updateProgress() {
  const done = flat.filter(isComplete).length;
  progressText.textContent = `${done} / ${flat.length}`;
  progressBar.style.width = `${flat.length ? done / flat.length * 100 : 0}%`;
}

function renderMeta(row) {
  const item = row.item;
  const c = row.constraint;
  const pairs = [
    ['Item ID', item.item_id],
    ['Workflow', item.workflow],
    ['Task', item.task],
    ['Route', `${c.route} · ${c.label}`],
    ['Constraint', `${c.global_no} / ${flat.length}`],
    ['Family', `${c.family} / ${c.tag}`],
  ];
  metaGrid.innerHTML = pairs.map(([label, value]) => `
    <div class="meta"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>
  `).join('');
}

function renderConstraintFocus(row) {
  const c = row.constraint;
  const routeClass = c.route === 'rule' ? 'route-rule' : 'route-llm';
  const labelClass = c.label === 'PASS' ? 'pass' : 'fail';
  constraintFocus.innerHTML = `
    <div class="constraint ${routeClass}">
      <div class="constraint-head">
        <span>#${c.global_no} · [${escapeHtml(c.tag)}] ${escapeHtml(c.family)}</span>
        <span><span class="badge">${escapeHtml(c.route)}</span> <span class="badge ${labelClass}">${escapeHtml(c.label)}</span></span>
      </div>
      <p>${escapeHtml(c.constraint)}</p>
      <div class="judge-reason"><strong>自动判定理由：</strong>${escapeHtml(c.reason)}</div>
      <div class="judge-reason"><strong>Method：</strong>${escapeHtml(c.method || c.route)}</div>
    </div>
  `;
}

function renderConstraints(row) {
  const item = row.item;
  constraintsBox.innerHTML = item.constraints.map((c, idx) => {
    const globalIdx = flat.findIndex(r => r.item.item_id === item.item_id && r.constraint.constraint_index === c.constraint_index);
    const active = globalIdx === current;
    const done = isComplete(flat[globalIdx]);
    const labelClass = c.label === 'PASS' ? 'pass' : 'fail';
    return `
      <button class="constraint-card ${active ? 'active' : ''} ${done ? 'complete' : ''}" data-global-idx="${globalIdx}" type="button">
        <span class="constraint-card-head">#${c.global_no} · ${escapeHtml(c.route)} · <b class="${labelClass}">${escapeHtml(c.label)}</b> · ${escapeHtml(c.tag)}</span>
        <span>${escapeHtml(c.constraint)}</span>
      </button>
    `;
  }).join('');
  constraintsBox.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      current = Number(btn.dataset.globalIdx);
      render();
    });
  });
}

function buttonGroup(field, values, labels, record) {
  return `
    <div class="rating-row">
      <label>${labels.title}</label>
      <div class="choice-buttons" data-field="${field}">
        ${values.map(v => `<button type="button" class="${record[field] === v ? 'selected' : ''}" data-value="${v}">${labels[v] || v}</button>`).join('')}
      </div>
    </div>
  `;
}

function renderRatings(row) {
  const r = getRecord(row);
  ratingForm.innerHTML = [
    buttonGroup('human_score_PASS_FAIL', ['PASS', 'FAIL'], { title: '你认为该 constraint 是否满足？', PASS: 'PASS', FAIL: 'FAIL' }, r),
    buttonGroup('auto_correct_YesNo', ['Yes', 'No'], { title: '自动判定是否正确？', Yes: '正确', No: '不正确' }, r),
    buttonGroup('confidence_1to5', ['1', '2', '3', '4', '5'], { title: '你的判断信心（1-5）' }, r),
  ].join('');
  commentsInput.value = r.comments || '';
  ratingForm.querySelectorAll('.choice-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.parentElement.dataset.field;
      const next = getRecord(row);
      next[field] = btn.dataset.value;
      saveRecord(row, next);
      renderRatings(row);
    });
  });
}

function render() {
  const row = flat[current];
  if (!row) return;
  itemCounter.textContent = `${current + 1} / ${flat.length}`;
  renderMeta(row);
  renderConstraintFocus(row);
  fullPromptText.textContent = row.item.full_prompt || '';
  responseText.textContent = row.item.response || '';
  renderConstraints(row);
  renderRatings(row);
  renderList();
  updateProgress();
}

commentsInput.addEventListener('input', () => {
  const row = flat[current];
  const record = getRecord(row);
  record.comments = commentsInput.value;
  saveRecord(row, record);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  current = Math.max(0, current - 1);
  render();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  current = Math.min(flat.length - 1, current + 1);
  render();
});

annotatorSelect.addEventListener('change', () => {
  annotator = annotatorSelect.value;
  localStorage.setItem('finif_module_b_annotator', annotator);
  render();
});

function csvCell(value) {
  const text = String(value ?? '');
  return `"${text.replace(/"/g, '""')}"`;
}

function downloadCsv() {
  const header = [
    'annotator_id','item_id','constraint_index','global_no','workflow','task','route','family','tag',
    'auto_label','auto_score','auto_reason','constraint','human_score_PASS_FAIL','auto_correct_YesNo','confidence_1to5','comments'
  ];
  const lines = [header.join(',')];
  flat.forEach(row => {
    const r = getRecord(row);
    const c = row.constraint;
    const values = [
      annotator, row.item.item_id, c.constraint_index, c.global_no, row.item.workflow, row.item.task,
      c.route, c.family, c.tag, c.label, c.score, c.reason, c.constraint,
      r.human_score_PASS_FAIL || '', r.auto_correct_YesNo || '', r.confidence_1to5 || '', r.comments || ''
    ];
    lines.push(values.map(csvCell).join(','));
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `finif_module_B_${annotator}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

document.getElementById('downloadBtn').addEventListener('click', downloadCsv);

renderSummary();
render();
