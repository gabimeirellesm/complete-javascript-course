'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonClose = document.querySelector('.close-modal');
const buttonOpen = document.querySelectorAll('.show-modal');

for (let i = 0; i < buttonOpen.length; i++) {
  console.log(
    buttonOpen[i].addEventListener('click', function () {
      console.log('Button Clicked');
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    })
  );
}

buttonClose.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
