//Selecting necessary elements
const submitBtn = document.querySelector('.submit-btn');
const output = document.querySelector('.submit-output');
const form = document.querySelector('main');

//Adding click listener to submit button so that animation can be done
submitBtn.addEventListener('click', ()=>{
    
    //changing display property of main content so that the hidden text can show up
    form.style.display = 'none';
    //showing output by changing transform property
    output.style.transform = 'translateY(0%)';
});