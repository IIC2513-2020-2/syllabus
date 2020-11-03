document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const passwordField = document.querySelector('#password');

  form.addEventListener('submit', function(e) {
    const requiredFieldsIds = [
      'name',
      'email',
      'password',
    ];
    let isValid = true;

    requiredFieldsIds.forEach((fieldId) => {
      const element = document.getElementById(fieldId);
      const errorSibling = element.parentNode.querySelector('.error');
      if (!element.value) { 
        isValid = false;
        element.setAttribute('class', 'invalid');
        errorSibling.textContent = 'Este campo es requerido';
      } else {
        element.removeAttribute('class');
        errorSibling.textContent = '';
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });

  passwordField.addEventListener('keyup', function(e) {
    const value = e.target.value;
    const errorSibling = e.target.parentNode.querySelector('.error');
    if (value.length > 0 && value.length < 8) {
      e.target.setAttribute('class', 'invalid');
      errorSibling.textContent = 'La contraseña debe tener al menos 8 caracteres';
    } else {
      e.target.removeAttribute('class');
      errorSibling.textContent = '';
    }
  });
});
