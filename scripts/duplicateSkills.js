const elemScroll = document.getElementById("skills-scroll")
const elemScrollContainer = elemScroll.getElementById("skills-container")
const elemScrollChildren = Array.from(elemScrollContainer.children)

elemScrollChildren.forEach((item) => {
  const elemDuplicate = item.cloneNode(true)
  elemDuplicate.setAttribute('area-hidden', 'true')
  elemScrollContainer.appendChild(elemDuplicate)
})
