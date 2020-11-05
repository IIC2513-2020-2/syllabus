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

function createPhotoBlock(photoData) {
  const photoElem = document.createElement('li');
  const photoTitle = document.createElement('h3');
  const photoImg = document.createElement('img');
  photoElem.setAttribute('class', 'photo');
  photoTitle.textContent = photoData.title;
  photoImg.src = photoData.thumbnailUrl;
  photoElem.appendChild(photoTitle);
  photoElem.appendChild(photoImg);
  return photoElem;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded (vanilla)');
  const url = 'http://jsonplaceholder.typicode.com/albums/1/photos';
  const xhrButton = document.querySelector('.ajax-xhr-btn');
  const photosList = document.querySelector('.body ul');

  xhrButton.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    const xhrText = xhrButton.textContent;
    xhr.open('GET', url);
    xhr.onload = function() {
      const { response } = xhr;
      // xhr.response
      // console.log(JSON.parse(response));
      photosList.innerHTML = '';
      JSON.parse(response)
        .map(createPhotoBlock)
        .forEach((elem) => photosList.appendChild(elem));
      xhrButton.textContent = xhrText;
      xhrButton.disabled = false;
    };
    xhrButton.textContent = 'Cargando...';
    xhrButton.disabled = true;
    xhr.send();
  });
});
