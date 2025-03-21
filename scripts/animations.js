// Animation cover limit
const elementBlinking = document.getElementById("headerCoverTrans")
setTimeout(() => {
  elementBlinking.style.animation = "none"
  elementBlinking.style.borderRight = "none"
}, 2000)

// Animation appear
const myObserve = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting === true) {
      element.target.classList.add("animation-show")
    } else {
      element.target.classList.remove("animation-show")
    }
  })
})

const elements = document.querySelectorAll(".animation-hidden")
elements.forEach((element) => myObserve.observe(element))

// Animation slide
// function slideSkills(direction) {
//   skillsContainer.style.animationPlayState = "paused"
//   const skillsContainer = document.getElementById("skills-container")

//   if (direction === "right") {
//     console.log("CHAMOU R")
//     console.log(direction)
//     skillsContainer.style.translate = "100px"
//   }
//   if (direction === "left") {
//      console.log("CHAMOU L")
//     console.log(direction)
//     skillsContainer.style.translate = "-100px"
//   }
//   skillsContainer.style.animationPlayState = "running"
// }
