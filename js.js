alert("welcome");

document.getElementById('post').textContent = 'My First Project';
document.getElementById('description').textContent= 'I made a webpage';

let buttons = document.createElement('button');
buttons.textContent = "click";
buttons.addEventListener('click', () => {
    if(buttons.textContent === "click")
    {
        buttons.textContent = "clicked";
    }
    else{
        buttons.textContent = "click";
    }
})
document.body.appendChild(buttons);

