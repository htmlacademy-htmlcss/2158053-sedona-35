const openBtn = document.querySelector('.search-button');
const modal = document.querySelector('.modal');
openBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-close');
});

const closeBtn = document.querySelector('.modal-close-button');
closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-close');
});
