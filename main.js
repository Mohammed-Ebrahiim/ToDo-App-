let input = document.querySelector('.task');
let AddBtn = document.querySelector('.Add-task');
let tasks = document.querySelector('.tasks');



AddBtn.disabled = true;
input.addEventListener('keyup', ()=>{
    if (input.value.length >= 5) {
        AddBtn.disabled = false;
        AddBtn.style.cursor='pointer';
    }
    else{
        AddBtn.disabled = true;
    }
});

AddBtn.addEventListener('click',()=>{
        let date = new Date();
        let houres = date.getHours();
        let minutes = date.getMinutes();
        let seconds =date.getSeconds();

        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
                <p>${input.value}</p>
                <span>${houres}:${minutes}:${seconds}</span>
                <div class="item-buttons">
                    <i class="fa-solid fa-circle-check text-success fs-3"></i>
                    <i class="fa-solid fa-trash text-danger fs-3"></i>            
                </div>`
        tasks.prepend(newItem);
        input.value = '';
        AddBtn.disabled = true;

})

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-circle-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-trash')){
        console.log('Done')
        e.target.parentElement.parentElement.remove();
    }
})
