/* 
============================================================
    VARIABLES PARA EL MODAL
============================================================
*/
const openModal = document.querySelector('.link-email');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
/* 
============================================================
    EVENTOS PARA EL MODAL
============================================================
*/
openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});