const moduleB = window.FINIF_MODULE_B || { summary: {}, items: [] };
const items = moduleB.items || [];
const flat = [];
items.forEach((item, itemIdx) => {
  (item.constraints || []).forEach((constraint, constraintIdx) => {
    flat.push({ itemIdx, constraintIdx, item, constraint });
  });
});

let current = 0;
let annotator = localStorage.getItem('finif_module_b_v3_annotator') || 'A1';

const itemList = document.getElementById('itemList');
const summaryBox = document.getElementById('summaryBox');
const metaGrid = document.getElementById('metaGrid');
const fullPromptText = document.getElementById('fullPromptText');
const responseText = document.getElementById('responseText');
const responseHeading = document.getElementById('responseHeading');
const constraintsBox = document.getElementById('constraintsBox');
const constraintFocus = document.getElementById('constraintFocus');
const qualityForm = document.getElementById('qualityForm');
const ratingForm = document.getElementById('ratingForm');
const revealBox = document.getElementById('revealBox');
const commentsInput = document.getElementById('commentsInput');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const itemCounter = document.getElementById('itemCounter');
const annotatorSelect = document.getElementById('annotatorSelect');
annotatorSelect.value = annotator;

function escapeHtml(text) {
  return String(text ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function storageKey(row = flat[current]) {
  return `finif_module_b_v3_${annotator}_${row.item.pair_id}_${row.constraint.constraint_index}`;
}

function pairStorageKey(item) {
  return `finif_module_b_v3_pair_${annotator}_${item.pair_id}`;
}

function blankRecord(row) {
  return {
    annotator_id: annotator,
    pair_id: row.item.pair_id,
    item_id: row.item.item_id,
    constraint_index: row.constraint.constraint_index,
    human_score_PASS_FAIL: '',
    confidence_1to5: '',
    comments: ''
  };
}

function getRecord(row = flat[current]) {
  const raw = localStorage.getItem(storageKey(row));
  const base = blankRecord(row);
  return raw ? { ...base, ...JSON.parse(raw) } : base;
}

function saveRecord(row, record) {
  if (getPairRecord(row.item).revealed) return;
  record.annotator_id = annotator;
  record.pair_id = row.item.pair_id;
  record.item_id = row.item.item_id;
  record.constraint_index = row.constraint.constraint_index;
  localStorage.setItem(storageKey(row), JSON.stringify(record));
  render();
}

function getPairRecord(item) {
  const raw = localStorage.getItem(pairStorageKey(item));
  const base = {
    annotator_id: annotator,
    pair_id: item.pair_id,
    human_quality_0to10: '',
    revealed: false,
    locked_at: ''
  };
  return raw ? { ...base, ...JSON.parse(raw) } : base;
}

function savePairRecord(item, record) {
  record.annotator_id = annotator;
  record.pair_id = item.pair_id;
  localStorage.setItem(pairStorageKey(item), JSON.stringify(record));
  render();
}

function rowsForItemIdx(itemIdx) {
  return flat.filter(row => row.itemIdx === itemIdx);
}

function isConstraintComplete(row) {
  const record = getRecord(row);
  return Boolean(record.human_score_PASS_FAIL && record.confidence_1to5);
}

function isPairReady(itemIdx) {
  const item = items[itemIdx];
  const pairRecord = getPairRecord(item);
  return pairRecord.human_quality_0to10 !== '' && rowsForItemIdx(itemIdx).every(isConstraintComplete);
}

function isPairRevealed(item) {
  return Boolean(getPairRecord(item).revealed);
}

function renderSummary() {
  const s = moduleB.summary || {};
  const revealed = items.filter(isPairRevealed).length;
  summaryBox.innerHTML = `
    <div class="summary-title">盲审任务</div>
    <div class="metric"><span>唯一题目</span><strong>${s.unique_prompts || 0}</strong><em>同一批 prompts</em></div>
    <div class="metric"><span>模型回答</span><strong>${s.response_pairs || 0}</strong><em>每题两个匿名 Response</em></div>
    <div class="metric small"><span>已锁定 Response</span><strong>${revealed}/${s.response_pairs || 0}</strong><em>锁定前不显示自动结果</em></div>
  `;
}

function renderList() {
  itemList.innerHTML = items.map((item, idx) => {
    const rows = rowsForItemIdx(idx);
    const done = rows.filter(isConstraintComplete).length;
    const active = flat[current]?.itemIdx === idx;
    const revealed = isPairRevealed(item);
    const qualityDone = getPairRecord(item).human_quality_0to10 !== '';
    return `
      <button class="item-chip ${active ? 'active' : ''} ${revealed ? 'complete' : ''}" data-item-idx="${idx}" type="button">
        <span class="chip-no">题 ${String(item.prompt_index).padStart(2, '0')} · Response ${escapeHtml(item.response_variant)}</span>
        <span class="chip-title">${done}/${rows.length} constraints · Quality ${qualityDone ? '已填' : '未填'}${revealed ? ' · 已锁定' : ''}</span>
      </button>
    `;
  }).join('');
  itemList.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.itemIdx);
      current = flat.findIndex(row => row.itemIdx === idx);
      render();
    });
  });
}

function updateProgress() {
  const done = flat.filter(isConstraintComplete).length;
  progressText.textContent = `${done} / ${flat.length}`;
  progressBar.style.width = `${flat.length ? done / flat.length * 100 : 0}%`;
}

function renderMeta(row) {
  const item = row.item;
  const c = row.constraint;
  const pairs = [
    ['题目', `${item.prompt_index} / ${moduleB.summary.unique_prompts}`],
    ['匿名回答', `Response ${item.response_variant}`],
    ['Workflow', item.workflow],
    ['Task', item.task],
    ['Constraint', `${c.global_no} / ${flat.length}`],
    ['Family', `${c.family} / ${c.tag}`]
  ];
  metaGrid.innerHTML = pairs.map(([label, value]) => `
    <div class="meta"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>
  `).join('');
}

function renderConstraintFocus(row) {
  const c = row.constraint;
  const revealed = isPairRevealed(row.item);
  const record = getRecord(row);
  const agreed = record.human_score_PASS_FAIL === c.label;
  constraintFocus.innerHTML = `
    <div class="constraint ${revealed ? (c.route === 'rule' ? 'route-rule' : 'route-llm') : ''}">
      <div class="constraint-head">
        <span>#${c.global_no} · [${escapeHtml(c.tag)}] ${escapeHtml(c.family)}</span>
        ${revealed ? `<span><span class="badge">${escapeHtml(c.route)}</span> <span class="badge ${c.label === 'PASS' ? 'pass' : 'fail'}">${escapeHtml(c.label)}</span></span>` : '<span class="badge muted-badge">自动结果已隐藏</span>'}
      </div>
      <p>${escapeHtml(c.constraint)}</p>
      ${revealed ? `
        <div class="judge-reason"><strong>自动判定理由：</strong>${escapeHtml(c.reason)}</div>
        <div class="judge-reason"><strong>人工与自动结果：</strong><span class="${agreed ? 'pass' : 'fail'}">${agreed ? '一致' : '不一致'}</span></div>
      ` : '<div class="blind-notice">请先独立完成本 Response 的全部 constraint 与整体 Quality 评分。</div>'}
    </div>
  `;
}

function renderConstraints(row) {
  const item = row.item;
  const revealed = isPairRevealed(item);
  constraintsBox.innerHTML = item.constraints.map(c => {
    const globalIdx = flat.findIndex(candidate => candidate.item.pair_id === item.pair_id && candidate.constraint.constraint_index === c.constraint_index);
    const active = globalIdx === current;
    const done = isConstraintComplete(flat[globalIdx]);
    return `
      <button class="constraint-card ${active ? 'active' : ''} ${done ? 'complete' : ''}" data-global-idx="${globalIdx}" type="button">
        <span class="constraint-card-head">#${c.global_no} · ${escapeHtml(c.tag)}${revealed ? ` · ${escapeHtml(c.route)} · <b class="${c.label === 'PASS' ? 'pass' : 'fail'}">${escapeHtml(c.label)}</b>` : ''}</span>
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

function buttonGroup(field, values, labels, record, disabled = false) {
  return `
    <div class="rating-row">
      <label>${labels.title}</label>
      <div class="choice-buttons" data-field="${field}">
        ${values.map(value => `<button type="button" ${disabled ? 'disabled' : ''} class="${record[field] === value ? 'selected' : ''}" data-value="${value}">${labels[value] || value}</button>`).join('')}
      </div>
    </div>
  `;
}

function renderQuality(row) {
  const item = row.item;
  const pairRecord = getPairRecord(item);
  const revealed = pairRecord.revealed;
  const scores = Array.from({ length: 11 }, (_, idx) => String(idx));
  qualityForm.innerHTML = `
    <div class="quality-title">本 Response 整体 Quality（0–10）</div>
    <p class="hint">10=优秀、准确、完整且可交付；7–9=较好但有小遗漏；4–6=部分可用但有明显不足；1–3=较差或存在重大问题；0=不可用、跑题、空白或主要为幻觉。每个 Response 只填一次。</p>
    <div class="quality-buttons" data-field="human_quality_0to10">
      ${scores.map(score => `<button type="button" ${revealed ? 'disabled' : ''} class="${pairRecord.human_quality_0to10 === score ? 'selected' : ''}" data-value="${score}">${score}</button>`).join('')}
    </div>
    ${revealed ? `
      <div class="auto-result">
        <strong>已锁定：</strong>人工 ${escapeHtml(pairRecord.human_quality_0to10)} / GPT-4o ${escapeHtml(item.auto_quality_score)}<br>
        <span>${escapeHtml(item.auto_quality_reason)}</span>
      </div>
    ` : ''}
  `;
  if (!revealed) {
    qualityForm.querySelectorAll('.quality-buttons button').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = getPairRecord(item);
        next.human_quality_0to10 = btn.dataset.value;
        savePairRecord(item, next);
      });
    });
  }
}

function renderRatings(row) {
  const record = getRecord(row);
  const revealed = isPairRevealed(row.item);
  ratingForm.innerHTML = [
    buttonGroup('human_score_PASS_FAIL', ['PASS', 'FAIL'], { title: '你认为该 constraint 是否满足？', PASS: 'PASS', FAIL: 'FAIL' }, record, revealed),
    buttonGroup('confidence_1to5', ['1', '2', '3', '4', '5'], { title: '你的判断信心（1–5）' }, record, revealed)
  ].join('');
  commentsInput.value = record.comments || '';
  ratingForm.querySelectorAll('.choice-buttons button:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.parentElement.dataset.field;
      const next = getRecord(row);
      next[field] = btn.dataset.value;
      saveRecord(row, next);
    });
  });
}

function renderReveal(row) {
  const itemIdx = row.itemIdx;
  const item = row.item;
  const pairRecord = getPairRecord(item);
  const rows = rowsForItemIdx(itemIdx);
  const done = rows.filter(isConstraintComplete).length;
  const qualityDone = pairRecord.human_quality_0to10 !== '';
  if (pairRecord.revealed) {
    revealBox.innerHTML = `<div class="locked-notice">本 Response 已锁定；自动结果现已显示。人工标签不能再修改，备注仍可补充。</div>`;
    return;
  }
  const ready = isPairReady(itemIdx);
  revealBox.innerHTML = `
    <div class="reveal-status">锁定条件：constraints ${done}/${rows.length}；Quality ${qualityDone ? '已填' : '未填'}。</div>
    <button id="revealBtn" type="button" ${ready ? '' : 'disabled'}>锁定本 Response 并显示自动结果</button>
    <p class="hint">锁定后人工标签不可修改，用于避免自动判定影响你的独立判断。</p>
  `;
  const button = document.getElementById('revealBtn');
  if (ready) {
    button.addEventListener('click', () => {
      const next = getPairRecord(item);
      next.revealed = true;
      next.locked_at = new Date().toISOString();
      savePairRecord(item, next);
    });
  }
}

function render() {
  const row = flat[current];
  if (!row) return;
  itemCounter.textContent = `${current + 1} / ${flat.length}`;
  responseHeading.textContent = `Response ${row.item.response_variant}（模型名称已隐藏）`;
  renderMeta(row);
  renderConstraintFocus(row);
  fullPromptText.textContent = row.item.full_prompt || '';
  responseText.textContent = row.item.response || '';
  renderConstraints(row);
  renderQuality(row);
  renderRatings(row);
  renderReveal(row);
  renderList();
  renderSummary();
  updateProgress();
}

commentsInput.addEventListener('input', () => {
  const row = flat[current];
  const record = getRecord(row);
  record.comments = commentsInput.value;
  record.annotator_id = annotator;
  localStorage.setItem(storageKey(row), JSON.stringify(record));
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
  localStorage.setItem('finif_module_b_v3_annotator', annotator);
  render();
});

function csvCell(value) {
  const text = String(value ?? '');
  return `"${text.replace(/"/g, '""')}"`;
}

function downloadCsv() {
  const header = [
    'annotator_id','pair_id','item_id','prompt_index','response_variant','model','run_label',
    'constraint_index','global_no','workflow','task','route','family','tag','constraint',
    'auto_label','auto_score','auto_reason','human_score_PASS_FAIL','auto_correct_YesNo',
    'confidence_1to5','human_quality_0to10','auto_quality_0to10','auto_quality_reason',
    'pair_revealed','locked_at','comments'
  ];
  const lines = [header.join(',')];
  flat.forEach(row => {
    const record = getRecord(row);
    const pairRecord = getPairRecord(row.item);
    const c = row.constraint;
    const autoCorrect = record.human_score_PASS_FAIL ? (record.human_score_PASS_FAIL === c.label ? 'Yes' : 'No') : '';
    const values = [
      annotator, row.item.pair_id, row.item.item_id, row.item.prompt_index, row.item.response_variant,
      row.item.model, row.item.run_label, c.constraint_index, c.global_no, row.item.workflow, row.item.task,
      c.route, c.family, c.tag, c.constraint, c.label, c.score, c.reason,
      record.human_score_PASS_FAIL || '', autoCorrect, record.confidence_1to5 || '',
      pairRecord.human_quality_0to10, row.item.auto_quality_score, row.item.auto_quality_reason,
      pairRecord.revealed ? 'Yes' : 'No', pairRecord.locked_at || '', record.comments || ''
    ];
    lines.push(values.map(csvCell).join(','));
  });
  const blob = new Blob(['\ufeff' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `finif_module_B_blind_${annotator}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

document.getElementById('downloadBtn').addEventListener('click', downloadCsv);

render();
