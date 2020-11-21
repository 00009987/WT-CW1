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