const myObserve = new IntersectionObserver((isVisible) => {
  isVisible.forEach((element) => {
    const elementScroll = document.getElementById("skills-container")
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

const elementBlinking = document.getElementById("headerCoverTrans")
setTimeout(() => {
  elementBlinking.style.animation = "none"
  elementBlinking.style.borderRight = "none"
}, 2000)
