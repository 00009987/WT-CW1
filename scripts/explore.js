/* SWITCHING BETWEEN CONTENTS USING OPTION BUTTONS*/

//Selecting necessary elements
const optionBtns = document.querySelectorAll('.option');
const exploreContainers = document.querySelectorAll('.explore-content-container');

optionBtns.forEach((optionbtn) =>{
    optionbtn.addEventListener('click', (option) =>{        
        let optionID = option.currentTarget.parentElement.getAttribute('href');

        exploreContainers.forEach((container) =>{
            let containerID = '#' + container.getAttribute('id');

            if( optionID === containerID){
                container.classList.add('explore-on')
            }else{
                container.classList.remove('explore-on');
                container.classList.add('explore-off');
            }
        })
    });
});



/* ANIMATING IMAGE WITH CONTENTS*/

//creating array of object to keep track of containers
const orders = [
    {
        id: '1',        
    },
    {
        id : '2',                
    },
    {
        id: '3'
    }
];

//Selecting necessary elements
const btns = document.querySelectorAll('.read-btn');
const containers = document.querySelectorAll('.explore-image-container');

//looping through each button
btns.forEach((btn) =>{
    //adding each button an event listener to reach every container
    btn.addEventListener('click', (container) =>{               
        //looping through each container so that the index of the container can be chacked and classes can be added
        for(let i = 0; i < orders.length; i++){
            //if order from actual container matches with the order from array, then classes will be toggled
            if(container.currentTarget.dataset.order === orders[i].id){                         
                container.currentTarget.parentElement.classList.toggle('fadeIn');
                container.currentTarget.parentElement.children[0].classList.toggle('content-active');
            }
        }
    });
});
