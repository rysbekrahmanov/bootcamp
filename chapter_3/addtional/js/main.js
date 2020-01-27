document.addEventListener('DOMContentLoaded', ()=>{
    let state =[
        {
            status: false,
            value: 'vipolnit task'
        },
        {
            status:true,
            value : 'prochitat knigu'
        }
    ];
    let todoBtn = document.querySelector('.todo-btn')
    let todoInput = document.querySelector('.todo-input');
    let todoList = document.querySelector('.todo-list');

    todoBtn.addEventListener('click', addItem);
    // todoInput.addEventListener('change', addItem)
    document.addEventListener('keyup', event =>{
        if(event.keyCode === 13)
    })
    todoList.addEventListener('click', event =>{
        let className = event.target.className;
        let itemIndex = null; 


        todoList.childNodes.forEach((item, index)=> {
            if (item ===event.target.parentElement) itemIndex = index
        })

        if(event.target.className === 'todo-btn__change') editItemStatus(event)
        else if(className === 'todo-btn__delete') console.log('DELETE')
    })
    function deleteItem (index){
        state.splice(index ,1)
        render(state)
    }

    function editItemStatus(e){
      let itemIndex = null; 


         todoList.childNodes.forEach((item, index)=> {
             if (item ===e.target.parentElement) itemIndex = index
         })
         
         state[index].status =!state[index].status;
         render(state);


    }

    function addItem  () {

        const value = todoInput.value;
        const item ={
            value,
            status:false
        }

        state.push(item);
        todoInput.value = '';
        render(state);

    }


    function  render (arr) {
        
        todoList.innerHTML = ''

    

        arr.forEach(item =>{
            let liElem = document.createElement('li');
            let btnChangeElem = document.createElement('button');
            let btnDeleteElem = document.createElement('button');
            let spanElem = document.createElement('span');

            btnChangeElem.innerText = 'Smenit status';
            btnDeleteElem.innerText = 'udalit';

            btnChangeElem.classList.add('todo-btn__change');
            btnDeleteElem.classList.add('todo-btn__delete');
            spanElem.innerText = item.value;



            if(item.status) liElem.className = 'todo-item complited'
            else liElem.className = 'todo-item'

            
            liElem.append(spanElem);
            liElem.append(btnChangeElem);
            liElem.append(btnDeleteElem);

            todoList.append(liElem);

        })
    }

    render(state);

})






