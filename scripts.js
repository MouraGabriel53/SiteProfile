function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  const imgProfile = document.querySelector("#profile-img")
  const iconMode = document.querySelector("#iconMode")

  if (html.classList.contains("dark")) {
    imgProfile.setAttribute("src", "./assets/logo-light.png")
    iconMode.setAttribute("src", "./assets/night-icon.svg")
  } else {
    imgProfile.setAttribute("src", "./assets/logo-dark.png")
    iconMode.setAttribute("src", "./assets/day-icon.svg")
  }
}