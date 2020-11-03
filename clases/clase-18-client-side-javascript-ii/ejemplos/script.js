$(function() {
  console.log('DOM loaded (using jQuery)');

  let counter = 0;

  $('.headers-btn').on('click', function(e) {
    console.log($(this));
    const spanElem = $(this).parent().find('span');
    counter += 1;
    const spanText = `<span>Button clicked ${counter} times</span>`;
    if (spanElem.length) {
      spanElem.replaceWith(spanText);
    } else {
      $(this).after(spanText);
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded (vanilla)');
});
