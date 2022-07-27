const maincontainer = document.querySelector('.main-container');
const btnAdd = document.querySelector('#btn-add');
const todo = document.querySelector('#todo');


btnAdd.addEventListener('click', function(){
    if (todo.value === ''){
        alert('Please enter content')
    }else{

         // content container
    let ul = document.createElement('ul');
    ul.classList.add('output-container');
    let li = document.createElement('li');
    li.classList.add('list');
    li.textContent = todo.value;
    ul.appendChild(li);
    // adding btn
    let done = document.createElement('button');
    done.classList.add('done')
    done.textContent = 'done';
    ul.appendChild(done);

    let delet = document.createElement('button');
    delet.classList.add('delet')
    delet.textContent = 'delet';
    ul.appendChild(delet);

    maincontainer.appendChild(ul);
    // console.log(maincontainer);
    
    // done and delete events

    done.addEventListener('click', function(){
        done.style.backgroundColor = 'yellow';
        
        li.style.textDecoration = 'line-through';
        

    });
    
    // delete event
    delet.addEventListener('click', function(){

        ul.remove();

    });

    }

    todo.value = '';
   



});