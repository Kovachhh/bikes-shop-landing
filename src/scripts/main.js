'use strict';

const phoneIconElement = document.getElementsByClassName('icon icon--phone')[0];
const phoneNumberElement = document.getElementsByClassName(
  'top-bar__icons__phone__link',
)[0];

// Додаємо обробник подій для наведення миші на елемент
phoneIconElement.addEventListener('mouseover', function() {
  phoneNumberElement.classList.remove('hidden');
});

// Додаємо обробник подій для відведення миші від елемента
phoneIconElement.addEventListener('mouseout', function() {
  phoneNumberElement.classList.add('hidden');
});
