'use strict';

const phoneIconElement = document.getElementsByClassName('icon icon--phone')[0];
const phoneNumberElement = document.getElementsByClassName(
  'top-bar__icons__phone__link',
)[0];

phoneIconElement.addEventListener('mouseover', function() {
  phoneNumberElement.classList.remove('hidden');
});

phoneIconElement.addEventListener('mouseout', function() {
  phoneNumberElement.classList.add('hidden');
});
