const myObserve = new IntersectionObserver((isVisible) => {
  isVisible.forEach((element) => {
    if (element.isIntersecting === true) {
      element.target.classList.add("animation-show")
    } else {
      element.target.classList.remove("animation-show")
    }
  })
})

const elements = document.querySelectorAll(".animation-hidden")
elements.forEach((element) => myObserve.observe(element))
