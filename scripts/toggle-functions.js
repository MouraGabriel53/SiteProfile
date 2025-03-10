function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const imgProfile = document.querySelector("#imgProfile")
  const iconMode = document.querySelector("#iconMode")

  html.classList.contains("light")
    ? (imgProfile.setAttribute("src", "./assets/icons/logo-light.png"),
      iconMode.setAttribute("src", "./assets/icons/day-icon.svg"))
    : (imgProfile.setAttribute("src", "./assets/icons/logo-dark.png"),
      iconMode.setAttribute("src", "./assets/icons/night-icon.svg"))
}

function toggleLanguage() {
  const html = document.documentElement
  html.classList.toggle("language-EN")

  const imgLanguage = document.querySelector("#imgLanguage")
  const selectedLanguage = document.querySelector("#selectedLanguage")

  html.classList.contains("language-EN")
    ? (imgLanguage.setAttribute("src", "./assets/icons/eua.png"),
      (selectedLanguage.textContent = "EN"))
    : (imgLanguage.setAttribute("src", "./assets/icons/br.png"),
      (selectedLanguage.textContent = "PT"))

  if (html.classList.contains("language-EN")) {
    const f = html.classList.contains("language-EN")
  }
}
