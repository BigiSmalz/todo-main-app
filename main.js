//change theme
const themeIcon = document.getElementById('icon');
const background = document.getElementById(".desktop-background")
const screenSize = window.innerWidth

themeIcon.onclick = function () {
 document.body.classList.toggle("darkTheme");
 if (document.body.classList.contains("darkTheme")) {
  themeIcon.src = "./images/icon-moon.svg"

 } else {
  themeIcon.src = "./images/icon-sun.svg"

 }
}

window.addEventListener("resize", (e) => {
 if (screenSize < 600) {
  background.src = "./images/bg-mobile-dark.jpg"
 } else {
  background.src = "./images/bg-mobile-light.jpg"
 }
})


// Add items
// const itemCount = document.querySelectorAll('.count span')
// const mobCount = document.querySelectorAll('.items-count span')

// itemCount.innerText =
//  mobCount.innerText =
