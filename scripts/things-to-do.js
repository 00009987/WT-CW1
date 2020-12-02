function contentAppear(){
    // storing content section names into an array according to its order
    const sectionNames = ['attractions', 'festivals', 'food', 'relaxation'];

    // looping through each section
    for(let i = 0; i < sectionNames.length; i++){
        // selecting a particular section container
        let section = document.querySelector("." + sectionNames[i]);
        // finding out size of an element and its top position relative to the viewport.
        let sectionPosition = section.getBoundingClientRect().top;
        // finding out interior height of the window and dividing it to 1.07 to create a little delay in animation
        let screenPosition = window.innerHeight / 1.07;

        // checking heights and adding an animation to the selected section
        if(sectionPosition < screenPosition)
            section.classList.add('appear');        
    }
}

window.addEventListener('scroll', contentAppear);
