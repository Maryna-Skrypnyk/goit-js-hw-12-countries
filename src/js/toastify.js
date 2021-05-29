import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

// import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

// import { defaults } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/Material.css';
// defaults.styling = 'material';

// defaultModules.set(PNotifyMobile, {});
function onSuccess(success) {
  Toastify({
    text: 'Congratulations! You have found the country!',
    duration: 2000,
    gravity: 'top', // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: 'info info-success',
    offset: {
      x: 305, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 17, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();
}

function onFetchMore(more) {
  Toastify({
    text: 'Too many matches found. Please enter a more specific query!',
    duration: 2000,
    gravity: 'top', // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: 'info info-more',
    offset: {
      x: 305, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 17, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();

  // alert({
  //   text: 'Too many matches found. Please enter a more specific query!',
  //   delay: 2000,
  // });
}

function onFetchError() {
  Toastify({
    text: 'There is no such country. Enter again.',
    duration: 2000,
    gravity: 'top', // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: 'info info-error',
    offset: {
      x: 305, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 107, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();

  // alert({
  //   text: 'There is no such country. Enter again.',
  //   delay: 2000,
  // });
}

export default { onSuccess, onFetchMore, onFetchError };
