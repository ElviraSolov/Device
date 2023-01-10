//Модальное окно
let modalContainer = document.querySelector('.modal-container');
let modalToggleOpen = document.querySelector('.delivery-button');
let modalToggleClose = document.querySelector('.modal-close-button');

modalToggleOpen.addEventListener('click', function () {
  modalContainer.classList.remove('modal-container-close');
  modalContainer.classList.add('modal-container-open');
});

modalToggleClose.addEventListener('click', function () {
  modalContainer.classList.remove('modal-container-open');
  modalContainer.classList.add('modal-container-close');
});
