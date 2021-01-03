const addForm = document.querySelector('.add');

const list = document.querySelector('.todos');

const search = document.querySelector('.search input')

const generateTemplate = function(todo){
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span> ${todo} </span>
    <i class="far fa-trash-alt delete"></i></li> 
    
    `;
    list.innerHTML += html
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const toDo = addForm.add.value.trim();
    if(toDo.length){
    generateTemplate(toDo)}
    //truthy if input has anylength 

    addForm.reset();
    //resets input field after item added
});


//delete todos

list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


const filterTodos = (searchterm) => {

    Array.from(list.children)
    .filter((listEntry) => !listEntry.textContent.toLowerCase().includes(searchterm))
    .forEach((listEntry) => listEntry.classList.add('filtered'))

    Array.from(list.children)
    .filter((listEntry) => listEntry.textContent.includes(searchterm))
    .forEach((listEntry) => listEntry.classList.remove('filtered'))


};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
});