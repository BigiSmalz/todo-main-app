// change theme
const themeIcon = document.querySelectorAll('.theme');
themeIcon.addEventListener('click', () => {
 document.boby.classList.toggle('light')
 if (document.body.classList.contains('light')) {
  return themeIcon.src = 'images/icon-moon.svg'
 } else {
  return themeIcon.src = 'images/icon-moon.svg'
 }
})
// Add items
const addButton = document.querySelector('.todo-input button');
const itemInput = document.querySelector('.todo-input')