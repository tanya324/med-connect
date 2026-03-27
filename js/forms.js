function handleSubmit(e, successId, toastMsg) {
  e.preventDefault();
  const form = e.target;

  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = '#dc2626';
      field.setAttribute('aria-invalid', 'true');
      isValid = false;
    } else {
      field.style.borderColor = '';
      field.removeAttribute('aria-invalid');
    }
  });

  if (!isValid) {
    showToast('Please fill in all required fields.');
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  form.querySelectorAll('input, select, textarea, button[type="submit"]').forEach(el => {
    el.disabled = true;
  });

  const successEl = document.getElementById(successId);
  if (successEl) {
    successEl.classList.add('show');
    successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  showToast(toastMsg);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}