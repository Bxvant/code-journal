// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global data */

const inputURL = document.getElementById('photoURL') as HTMLInputElement;
const photoPreview = document.getElementById('url-photo') as HTMLImageElement;

function updatePhotoPreview(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  photoPreview.setAttribute('src', inputElement.value);
}

inputURL.addEventListener('input', updatePhotoPreview);

/* code above is the event listener for the URL SRC */
