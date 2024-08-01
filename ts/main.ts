// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global data */

interface FormElements extends HTMLFormControlsCollection {
  photoURL: HTMLInputElement;
  title: HTMLInputElement;
  notes: HTMLTextAreaElement;
}

const $inputURL = document.getElementById('photoURL') as HTMLInputElement;
const photoPreview = document.getElementById('url-photo') as HTMLImageElement;

if (!$inputURL) throw new Error('inputURL not found');
if (!photoPreview) throw new Error('photoPreview not found');

function updatePhotoPreview(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  photoPreview.setAttribute('src', inputElement.value);
}

$inputURL.addEventListener('input', updatePhotoPreview);

/* code above is the event listener for the URL SRC */
/* code below is the event listener for the submit button */

const entryForm = document.querySelector('#entry-form') as HTMLFormElement;
const $title = document.querySelector('#title') as HTMLInputElement;
const $notes = document.querySelector('#notes') as HTMLTextAreaElement;

if (!entryForm) throw new Error('$entryForm query has failed');
if (!$title) throw new Error('$title query has failed');
if (!$notes) throw new Error('$notes query has failed');

entryForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = entryForm.elements as FormElements;
  const title = $formElements.title.value;
  const photoURL = $formElements.photoURL.value;
  const notes = $formElements.notes.value;
  const entry: Entry = {
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
