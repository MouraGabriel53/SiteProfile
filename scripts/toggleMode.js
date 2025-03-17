function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const imgProfile = document.getElementById("imgProfile")
  const iconMode = document.getElementById("iconMode")

  html.classList.contains("light")
    ? (imgProfile.setAttribute("src", "./assets/icons/logo-light.png"),
      iconMode.setAttribute("src", "./assets/icons/day-icon.svg"))
    : (imgProfile.setAttribute("src", "./assets/icons/logo-dark.png"),
      iconMode.setAttribute("src", "./assets/icons/night-icon.svg"))
}
