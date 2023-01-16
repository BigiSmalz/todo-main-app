// change theme
<<<<<<< HEAD
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
=======
const themeIcon = document.getElementById('icon');
const background = document.getElementById(".desktop-background")
const screenSize = window.innerWidth

themeIcon.onclick = function () {
    document.body.classList.toggle("darkTheme");
    if (document.body.classList.contains("darkTheme")) {
        themeIcon.src = "./images/icon-moon.svg"
        background.src = "./images/bg-desktop-dark.jpg"
    } else {
        themeIcon.src = "./images/icon-sun.svg"
        background.src = "./images/bg-desktop-light.jpg"
    }
}

window.addEventListener("resize", (e)=>{
    if(screenSize < 600){
        background.src = "./images/bg-mobile-dark.jpg"
    }else{
        background.src = "./images/bg-mobile-light.jpg"
    }
})


// Add items
// const itemCount = document.querySelectorAll('.count span')
// const mobCount = document.querySelectorAll('.items-count span')

// itemCount.innerText =
//  mobCount.innerText =
>>>>>>> 0f4cdd1c863469be85c87de5ece35ddd63097053
