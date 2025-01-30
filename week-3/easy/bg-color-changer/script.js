function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
}

function addCustomColor(color){
    const colorPanel = document.querySelector('.color-panel')
    const newButton = document.createElement('button');
    newButton.classList.add('color-btn');
    newButton.style.backgroundColor = color;
    newButton.addEventListener('click', ()=>{changeBackgroundColor(color)});
    colorPanel.appendChild(newButton);
}

const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const color = button.style.backgroundColor;
        changeBackgroundColor(color);
    })
})

document.getElementById('add-color-btn').addEventListener('click',()=>{
    const colorPicker = document.getElementById("color-picker");
    const selectedColor = colorPicker.value;
    addCustomColor(selectedColor);
})
