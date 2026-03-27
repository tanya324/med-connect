
function switchTab(name, btn) {
  document.querySelectorAll('.ftab').forEach(tab => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
  });

  document.querySelectorAll('.fpanel').forEach(panel => {
    panel.classList.remove('active');
    panel.hidden = true;
  });

  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');

  const panel = document.getElementById('panel-' + name);
  if (panel) {
    panel.classList.add('active');
    panel.hidden = false;
  }
}

function openTab(name, e) {
  e.preventDefault();
  const btn = document.getElementById('tab-' + name);
  if (btn) {
    switchTab(name, btn);
    setTimeout(() => {
      document.getElementById('forms').scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}