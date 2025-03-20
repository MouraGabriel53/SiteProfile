const elementBlinking = document.getElementById("headerCoverTrans")
setTimeout(() => {
  elementBlinking.style.animation = "none"
  elementBlinking.style.borderRight = "none"
}, 2000)

const myObserve = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting === true) {
      element.target.classList.add("animation-show")
      elementScroll.style.animationPlayState = "paused"
    } else {
      element.target.classList.remove("animation-show")
      elementScroll.style.animationPlayState = "paused"
    }
  })
})

const elements = document.querySelectorAll(".animation-hidden")
elements.forEach((element) => myObserve.observe(element))

// ----------------------------------------------------------

// const skillsCards = document.querySelectorAll(".skills-container-lang")

// const observeSkillsCards = new IntersectionObserver((entries) => {
//   entries.forEach((element) => {
//     if (element.isIntersecting === true) {
//       elementScroll.style.animationPlayState = "running"
//     } else {
//       elementScroll.style.animationPlayState = "paused"
//     }
//   })
// })

// const elementsSkills = document.querySelectorAll("#skills-container")
// elementsSkills.forEach((element) => myObserve.observe(element))

// ----------------------------------------------------------

// function translateSkills(direction) {
//   const skillsContainer = document.getElementById("skills-container")

//   if (direction === "right") {
//     console.log(direction)
//     skillsContainer.style.translate = "100px"
//   }
//   if (direction === "left") {
//     console.log(direction)
//     skillsContainer.style.translate = "-100px"
//   }
// }
