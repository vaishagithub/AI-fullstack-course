document.getElementById('task-form').addEventListener('submit',addTask);



function addTask(e){
  e.preventDefault();
const input = document.getElementById("task");
console.log(input);

const inputValue = input.value;
const li = document.createElement('li');
li.className = 'collection-item';
li.textContent = inputValue;

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = ' <i class="fa fa-remove"></i>';
link.href = "#";

li.appendChild(link);
document.querySelector(".collection").appendChild(li);
input.value = '';//clear the input element


}

//clear Task

document.getElementById('btn-clear').addEventListener('click',clearTask);

function clearTask(e){
    e.preventDefault();
  
    document.getElementById('task').value = '';
}
//delete single task

document.querySelector('.collection').addEventListener('click',deleteTask);

function deleteTask(e){
    if(e.target.classList.contains('fa-remove')){
        if(confirm('Are you sure you want to delete this task?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// //## **Structure breakdown:**
// ```
// <li>                          ← grandparent (this gets removed)
//   Task text
//   <a>                         ← parent
//     <i class="fa fa-remove">  ← target (what you click)
//   </a>
// </li>



