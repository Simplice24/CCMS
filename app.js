let add= document.getElementById('modal-btn');
let formCard= document.querySelector('.form-card');
let modalClose=document.querySelector('.modal-close');
add.addEventListener('click',function(){
    formCard.classList.add('bg-active');
});
modalClose.addEventListener('click',function(){
    formCard.classList.remove('bg-active');
})
