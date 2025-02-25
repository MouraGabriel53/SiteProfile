function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  const imgProfile = document.querySelector("#imgProfile")
  const iconMode = document.querySelector("#iconMode")
  const imgPython = document.querySelector("#imgPython")

  if (html.classList.contains("dark")) {
    imgProfile.setAttribute("src", "./assets/icons/logo-light.png")
    iconMode.setAttribute("src", "./assets/icons/night-icon.svg")
    imgPython.setAttribute("src", "./assets/logo-languages/python-dark.svg")
  } else {
    imgProfile.setAttribute("src", "./assets/icons/logo-dark.png")
    iconMode.setAttribute("src", "./assets/icons/day-icon.svg")
    imgPython.setAttribute("src", "./assets/logo-languages/python-light.svg")
  }
}

function toggleLanguage() {
  const html = document.documentElement
  html.classList.toggle("language-EN")

  const imgLanguage = document.querySelector("#imgLanguage")
  const selectedLanguage = document.querySelector("#selectedLanguage")

  if (html.classList.contains("language-EN")) {
    imgLanguage.setAttribute("src", "./assets/icons/eua.png")
    selectedLanguage.innerHTML = "EN"
  } else {
    imgLanguage.setAttribute("src", "./assets/icons/br.png")
    selectedLanguage.innerHTML = "PT"
  }
}
