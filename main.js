const input = document.getElementById("input")

/* Change Theme */
const themeIcon = document.querySelector('.theme');


themeIcon.addEventListener('click', () => {
  document.body.classList.toggle('darkTheme')
  if (document.body.classList.contains('darkTheme')) {
    themeIcon.src = 'images/icon-moon.svg'
    document.querySelector(".background").src = "./images/bg-desktop-dark.jpg";
  } else {
    themeIcon.src = 'images/icon-sun.svg'
    document.querySelector(".background").src = "./images/bg-desktop-light.jpg";
  }
})


window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const newTodoForm = document.querySelector('.todo-input')

  newTodoForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = {
      content: e.target.input.value,
      done: false,
      createdAt: new Date().getTime()
    }

    todos.forEach(todo => { // loop through existing todos to set "done" property to false
      todo.done = todo.done || false;
    });  

    let letFormValidaton = () => {
      if (input.value === "") {
        console.log("failure")
      } else {
        console.log("success")
        localStorage.setItem('todos', JSON.stringify(todos))
        todos.push(todo);
        e.target.reset()
        DisplayTodos();
        console.log(todos.length)
      }
    }
    letFormValidaton();
  })
  DisplayTodos();
})

09029437328

const DisplayTodos = () => {
  const todoList = document.querySelector('.todos')

  todoList.innerHTML = " ";

  todos.forEach(todo => {
    const todoUl = document.createElement('ul')
    const todoItem = document.createElement('li')
    const text = document.createElement('span')
    const checked = document.createElement('input');
    const label = document.createElement('label')
    const deleted = document.createElement('span')

    todoList.classList.add('simpleList');
    todoItem.classList.add('todo-item');
    checked.classList.add('check');
    text.classList.add('todo');
    deleted.classList.add('deleted')

    label.innerHTML = `${todo.content}`
    deleted.innerHTML = `<img src="./images/icon-cross.svg" alt="cross" />`
    label.setAttribute('for', "todo")
    const radioGroup = "todo";
    checked.setAttribute('type', 'checkbox');
    console.log(checked.value);
    // checked.setAttribute('name', radioGroup);


    todoList.appendChild(todoUl)
    todoUl.appendChild(todoItem)
    todoItem.appendChild(checked)
    todoItem.appendChild(label)
    todoItem.appendChild(text)
    todoItem.appendChild(deleted)

    deleted.addEventListener('click', () => {
      todoUl.remove();
      const index = todos.findIndex(t => t.createdAt === todo.createdAt);
      todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
    });

    checked.addEventListener('change', () => {
      const index = todos.findIndex(t => t.createdAt === todo.createdAt);
      todos[index].done = checked.checked;
      localStorage.setItem('todos', JSON.stringify(todos));

      const completedTodos = []

      todos.forEach(todo => {
        if (todo.checked) {
          completedTodos.push(todo)
        } else {
          ""
        }
      })
      console.log(completedTodos)
    });
  });

}


// make input onclick checck to add todo
// assign boolean to check input
// fix delete button for darkmode
// add checked todo to new array(completed)
