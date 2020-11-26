const btns = document.querySelectorAll('.tip-button');
const tipTexts = document.querySelectorAll('.tip-text');

btns.forEach((btn) => {
    btn.addEventListener('click', (currentBtn) => {
        currentBtn.currentTarget.children[0].classList.toggle('off');
        currentBtn.currentTarget.children[1].classList.toggle('off');
        currentBtn.currentTarget.parentElement.classList.toggle('tip-title-border');
        
        tipTexts.forEach((tipText) =>{
            if(tipText.dataset.id === currentBtn.currentTarget.dataset.id){
                tipText.classList.toggle('tip-text-on');
            }
        });        
    });
});