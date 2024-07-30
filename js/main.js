'use strict';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global data */
const $inputURL = document.getElementById('photoURL');
const photoPreview = document.getElementById('url-photo');
if (!$inputURL) throw new Error('inputURL not found');
if (!photoPreview) throw new Error('photoPreview not found');
function updatePhotoPreview(event) {
  const inputElement = event.target;
  photoPreview.setAttribute('src', inputElement.value);
}
$inputURL.addEventListener('input', updatePhotoPreview);
/* code above is the event listener for the URL SRC */
/* code below is the event listener for the submit button */
const entryForm = document.querySelector('#entry-form');
const $title = document.querySelector('#title');
const $notes = document.querySelector('#notes');
if (!entryForm) throw new Error('$entryForm query has failed');
if (!$title) throw new Error('$title query has failed');
if (!$notes) throw new Error('$notes query has failed');
entryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = $title.value;
  const photoURL = $inputURL.value;
  const notes = $notes.value;
  const entry = {
    title,
    photoURL,
    notes,
    entryID: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.unshift(entry);
  storeData();
  photoPreview.setAttribute('src', '/images/placeholder-image-square.jpg');
  entryForm.reset();
});
