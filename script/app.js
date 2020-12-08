// ------------------- SCROLL BUTTON ANIMATION -------------------//
// window.addEventListener('scroll', () => {
//     const scrollBtn = document.querySelector('.scroll-btn');
//     const scrollBtnPosition = scrollBtn.getBoundingClientRect().top;
//     const screenHeight = window.innerHeight;
//     console.log(scrollBtnPosition);
//     console.log(screenHeight);
//     if (screenHeight > scrollBtnPosition) {
//         scrollBtn.classList.add('scroll-btn-active');
//     }else{
//         scrollBtn.classList.remove('scroll-btn-active');
//     }
// });

// ------------------- BURGER NAVIGATION -------------------//

// selecting necessary elements
const burgerNav = document.querySelector('.burger-nav');
const navigation = document.querySelector('.nav-items');
const navigationLinks = document.querySelectorAll('.nav-items .nav-link');
const headerContact = document.querySelector('.header-contact');

// adding an eventlistener to burger-nav container
burgerNav.addEventListener('click', () => {
    // toggling nav by checking its place on X axis
    if (navigation.style.transform) {
        navigation.style.transform = '';

        // this is only for contact and news page
        if (typeof (headerContact) != 'undefined' && headerContact != null)
            document.querySelector('.header-contact').style.height = '15vh';
    } else {
        navigation.style.transform = 'translateX(0)';

        // this is only for contact and news page
        if (typeof (headerContact) != 'undefined' && headerContact != null)
            document.querySelector('.header-contact').style.height = '100vh';
    }

    // animating links
    // function takes two parameters: 
    // link - the actual link itsel 
    // index - the order of the link (it's used to animate links one after another)
    navigationLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ``;
        } else {
            link.style.animation = `linkFade .5s ease forwards ${index / 5}s`;
        }
    });

    // animating burger-nav container by toggling 'change' class
    burgerNav.classList.toggle('change');
});



// ------------------- HOME PAGE ANIMATION -------------------//

function contentAppear() {
    // storing content section names into an array according to its order
    const sectionNames = ['magome', 'kingdom', 'shrine'];

    // looping through each section
    for (let i = 0; i < sectionNames.length; i++) {
        // selecting a particular section container
        let section = document.querySelector("." + sectionNames[i]);
        // finding out an element's top position relative to the viewport.
        let sectionPosition = section.getBoundingClientRect().top;
        // finding out interior height of the window and dividing it to 1.2 to create a little delay in animation
        let screenPosition = window.innerHeight / 1.2;

        // checking heights and adding an animation to the selected section
        if (sectionPosition < screenPosition)
            section.classList.add('appear');
    }
}

if (document.title === 'Voyager') {
    // adding scroll listener to window so that animation can be done
    window.addEventListener('scroll', contentAppear);
}



// ------------------- EXPLORE PAGE ANIMATION -------------------//

if (document.title === 'Explore') {

    /* SWITCHING BETWEEN CONTENTS USING OPTION BUTTONS*/

    // selecting necessary elements
    const optionBtns = document.querySelectorAll('.option');
    const exploreContainers = document.querySelectorAll('.explore-content-container');

    // looping through each option button
    optionBtns.forEach((optionbtn) => {
        // adding click event listener to the button so that "switching content" can happen
        optionbtn.addEventListener('click', (option) => {
            // storing button's ID to a variable
            let optionID = option.currentTarget.parentElement.getAttribute('href');

            // iterating though content containers
            exploreContainers.forEach((container) => {
                // storing container's ID to a variable
                let containerID = '#' + container.getAttribute('id');

                // according to the logics below "on" and "off" classes will be added to containers
                if (optionID === containerID) {
                    container.classList.add('explore-on');
                    
                    // making footer section visible
                    document.querySelector('.footer-off').classList.add('footer-on');
                } else {
                    container.classList.remove('explore-on');
                    container.classList.add('explore-off');
                }
            });
        });
    });

    /* ANIMATING IMAGE WITH CONTENTS*/

    //creating array of object to keep track of containers
    const orders = ['1', '2', '3']

    //Selecting necessary elements
    const btns = document.querySelectorAll('.read-btn');
    const containers = document.querySelectorAll('.explore-image-container');

    //looping through each button
    btns.forEach((btn) => {
        //adding each button an event listener to reach every container
        btn.addEventListener('click', (container) => {
            //looping through each container so that the index of the container can be chacked and classes can be added
            for (let i = 0; i < orders.length; i++) {
                //if order from actual container matches with the order from array, then classes will be toggled
                if (container.currentTarget.dataset.order === orders[i]) {
                    container.currentTarget.parentElement.classList.toggle('fadeIn');
                    container.currentTarget.parentElement.children[0].classList.toggle('content-active');
                }
            }
        });
    });
}

// ------------------- PLAN-YOUR-TRIP PAGE ANIMATION -------------------//

if (document.title === 'Plan Your Trip') {
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


            tipTexts.forEach((tipText) => {
                //"tip text" container's numbered id is equal to clicked button's, then animate
                if (tipText.dataset.id === currentBtn.currentTarget.dataset.id) {
                    tipText.classList.toggle('tip-text-on');
                }
            });
        });
    });
}


// ------------------- Contact PAGE ANIMATION -------------------//

const submitBtn = document.querySelector('.submit-btn');

function outputAnimation() {
    //selecting necessary elements    
    const output = document.querySelector('.submit-output');
    const form = document.querySelector('main');
    //changing display property of main content so that the hidden text can show up
    form.classList.toggle('off');
    //showing output by changing transform property
    output.classList.toggle('on');
}

if (document.title === "Contact") {
    //adding click listener to submit button so that animation can be done
    submitBtn.addEventListener('click', outputAnimation);
}