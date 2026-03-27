const triage = {
  symptoms: new Set(),  
  severity: null,       
  duration: null,       
};

const CRITICAL_SYMPTOMS = ['chest', 'breath', 'dizzy'];




function toggleSym(btn, sym) {
  const isSelected = btn.classList.toggle('sel');
  btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');

  if (isSelected) {
    triage.symptoms.add(sym);
  } else {
    triage.symptoms.delete(sym);
  }
}





function selectSev(btn, level) {
  document.querySelectorAll('.sev-opt').forEach(b => {
    b.classList.remove('sel');
    b.setAttribute('aria-pressed', 'false');
  });

  btn.classList.add('sel');
  btn.setAttribute('aria-pressed', 'true');
  triage.severity = level;

  document.getElementById('btn-s2-next').disabled = false;
}





function selectDuration(btn, dur) {
  document.querySelectorAll('.aw-opt').forEach(b => {
    b.classList.remove('sel');
    b.setAttribute('aria-pressed', 'false');
  });

  btn.classList.add('sel');
  btn.setAttribute('aria-pressed', 'true');
  triage.duration = dur;

  document.getElementById('btn-s3-next').disabled = false;
}





function goStep(n) {
  if (n === 2 && triage.symptoms.size === 0) {
    showToast('Please select at least one symptom.');
    return;
  }

  [1, 2, 3].forEach(i => {
    document.getElementById('aws' + i).classList.remove('active');
  });

  document.getElementById('aws' + n).classList.add('active');
  updateProgress(n);
}

function updateProgress(currentStep) {
  [1, 2, 3].forEach(i => {
    const bar = document.getElementById('pb' + i);
    bar.classList.remove('done', 'active');
    if (i < currentStep)      bar.classList.add('done');
    else if (i === currentStep) bar.classList.add('active');
  });

  const progressEl = document.getElementById('aw-progress');
  if (progressEl) progressEl.setAttribute('aria-valuenow', currentStep);
}




function showResult() {
  if (!triage.duration) {
    showToast('Please select a duration.');
    return;
  }

  const syms = triage.symptoms;
  const sev  = triage.severity;
  const dur  = triage.duration;

  const hasCritical = [...syms].some(s => CRITICAL_SYMPTOMS.includes(s));
  const highSymCount = syms.size >= 4;

  let color, bgColor, borderColor, title, summary, actions;

  //1-Emergency
  if (hasCritical && (sev === 'severe' || dur === 'hours')) {
    color = '#991b1b'; bgColor = '#fee2e2'; borderColor = '#fca5a5';
    title   = '🔴 Emergency — Go to ER Now';
    summary = 'Your combination of symptoms — especially chest pain or breathing difficulty — requires immediate emergency medical attention. Do not wait or try home remedies.';
    actions = [
      'Call emergency services (112) or ask someone to take you to the ER immediately',
      'Do not drive yourself — call for help',
      'Inform a family member or friend right away',
      'If symptoms worsen rapidly, call an ambulance',
    ];

  //2-See a Doctor
  } else if (sev === 'severe' || hasCritical || (highSymCount && dur !== 'hours') || dur === 'long') {
    color = '#92400e'; bgColor = '#fef9c3'; borderColor = '#fcd34d';
    title   = '🟡 See a Doctor Soon';
    summary = 'Your symptoms suggest you should get a clinical evaluation. While this may not be an emergency, waiting too long could make things worse. Try to see a doctor within 24–48 hours.';
    actions = [
      'Book an appointment with a general physician today or tomorrow',
      'Visit an urgent care clinic if your regular doctor is unavailable',
      'Rest, stay hydrated, and monitor your symptoms closely',
      'If symptoms suddenly worsen — especially chest pain or breathing — go to the ER',
      "You can use MedConnect's patient form to request transport assistance",
    ];

  //3-Self-Care
  } else {
    color = '#065f46'; bgColor = '#d1fae5'; borderColor = '#6ee7b7';
    title   = '🟢 Self-Care at Home';
    summary = 'Based on your symptoms and severity, home care is likely sufficient for now. Rest and monitor how you feel over the next day or two.';
    actions = [
      'Get adequate rest and stay well hydrated',
      'Take over-the-counter medication if appropriate (e.g. paracetamol for fever/pain)',
      "Monitor your symptoms — if they don't improve in 2–3 days, see a doctor",
      'Eat light, nourishing meals and avoid strenuous activity',
      'Reach out to MedConnect if you need further support or guidance',
    ];
  }

  const box = document.getElementById('result-box');
  box.style.background   = bgColor;
  box.style.borderColor  = borderColor;

  const dot = document.getElementById('res-dot');
  dot.style.background = color;

  const titleEl = document.getElementById('res-title');
  titleEl.textContent = title;
  titleEl.style.color = color;

  const summaryEl = document.getElementById('res-summary');
  summaryEl.textContent = summary;
  summaryEl.style.color = color;

  const ul = document.getElementById('res-actions');
  ul.innerHTML = '';
  actions.forEach(action => {
    const li = document.createElement('li');
    li.textContent  = action;
    li.style.color  = color;
    ul.appendChild(li);
  });

  [1, 2, 3].forEach(i => {
    document.getElementById('aws' + i).classList.remove('active');
    document.getElementById('pb' + i).classList.add('done');
  });
  document.getElementById('aws-result').classList.add('active');
}

function resetTriage() {
  triage.symptoms.clear();
  triage.severity = null;
  triage.duration = null;

  document.querySelectorAll('.sym-btn').forEach(b => {
    b.classList.remove('sel');
    b.setAttribute('aria-pressed', 'false');
  });
  document.querySelectorAll('.sev-opt').forEach(b => {
    b.classList.remove('sel');
    b.setAttribute('aria-pressed', 'false');
  });
  document.querySelectorAll('.aw-opt').forEach(b => {
    b.classList.remove('sel');
    b.setAttribute('aria-pressed', 'false');
  });

  document.getElementById('btn-s2-next').disabled = true;
  document.getElementById('btn-s3-next').disabled = true;

  document.getElementById('aws-result').classList.remove('active');
  document.getElementById('aws1').classList.add('active');
  updateProgress(1);
}