//Selecting necessary elements
const burgerNav = document.querySelector('.burger-nav');
const navigation = document.querySelector('.nav-items');
const navigationLinks = document.querySelectorAll('.nav-items .nav-link');

burgerNav.addEventListener('click', () =>{
    //Toggle nav
    if(navigation.style.transform){
        navigation.style.transform = '';
    }else{
        navigation.style.transform = 'translateX(0)';
    }

    //Animate links
    navigationLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = ``;
        }else{
            link.style.animation = `linkFade .5s ease forwards ${index / 5}s`;
        }
    });

    //Burger animation
    burgerNav.classList.toggle('change');
});