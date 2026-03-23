const input= document.getElementById('taskInput');
const btn= document.getElementById('addBtn');
const list= document.getElementById('taskList');
const error= document.getElementById('errorMsg');

btn.addEventListener('click',()=>{
    const taskValue=input.value.trim();

    if (taskValue===""){
        error.style.display='block';
    }else{
        error.style.display='none';

        const newItem= document.createElement('li');
        newItem.textContent= taskValue;

        newItem.addEventListener('click',()=>{

   newItem.classList.toggle('completed');       
        });

        list.appendChild(newItem);

        input.value="";
    }
})