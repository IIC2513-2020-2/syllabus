document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.headers-btn');
  const link = document.querySelector('.link');

  btn.addEventListener('click', function() {
    console.log('Button pressed once again');
  });

  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});
