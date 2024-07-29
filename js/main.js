'use strict';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global data */
const inputURL = document.getElementById('photoURL');
const photoPreview = document.getElementById('url-photo');
function updatePhotoPreview(event) {
  const inputElement = event.target;
  photoPreview.setAttribute('src', inputElement.value);
}
inputURL.addEventListener('input', updatePhotoPreview);
/* code above is the event listener for the URL SRC */
