//selecting necessary elements
const btns = document.querySelectorAll('.tip-button');
const tipTexts = document.querySelectorAll('.tip-text');

//looping through each button to find the currenct clicked one
btns.forEach((btn) => {
    btn.addEventListener('click', (currentBtn) => {
        //toggling the classes of right and down buttons
        currentBtn.currentTarget.children[0].classList.toggle('off');
        currentBtn.currentTarget.children[1].classList.toggle('off');
        //animating the "tip title" by toggling its class
        currentBtn.currentTarget.parentElement.classList.toggle('tip-title-border');
        

        tipTexts.forEach((tipText) =>{
            //"tip text" container's numbered id is equal to clicked button's, then animate
            if(tipText.dataset.id === currentBtn.currentTarget.dataset.id){
                tipText.classList.toggle('tip-text-on');
            }
        });        
    });
});