//selecting necessary elements
const burgerNav = document.querySelector('.burger-nav');
const navigation = document.querySelector('.nav-items');
const navigationLinks = document.querySelectorAll('.nav-items .nav-link');

//adding an eventlistener to burger-nav container
burgerNav.addEventListener('click', () => {
    //toggling nav by checking its place on X axis
    if (navigation.style.transform) {
        navigation.style.transform = '';
    } else {
        navigation.style.transform = 'translateX(0)';
    }

    //animating links
    //function takes two parameters: 
    //link - the actual link itsel 
    //index - the order of the link (it's used to animate links one after another)
    navigationLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ``;
        } else {
            link.style.animation = `linkFade .5s ease forwards ${index / 5}s`;
        }
    });

    //animating burger-nav container by toggling 'change' class
    burgerNav.classList.toggle('change');
});
