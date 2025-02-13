function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  const imgProfile = document.querySelector("#imgProfile")
  const iconMode = document.querySelector("#iconMode")

  if (html.classList.contains("dark")) {
    imgProfile.setAttribute("src", "./assets/logo-light.png")
    iconMode.setAttribute("src", "./assets/night-icon.svg")
  } else {
    imgProfile.setAttribute("src", "./assets/logo-dark.png")
    iconMode.setAttribute("src", "./assets/day-icon.svg")
  }
}

function toggleLanguage() {
  const html = document.documentElement
  html.classList.toggle("language-EN")

  const imgLanguage = document.querySelector("#imgLanguage")
  const selectedLanguage = document.querySelector("#selectedLanguage")

  if (html.classList.contains("language-EN")) {
    imgLanguage.setAttribute("src", "./assets/eua.png")
    selectedLanguage.innerHTML = "EN"
  } else {
    imgLanguage.setAttribute("src", "./assets/br.png")
    selectedLanguage.innerHTML = "PT"
  }
}
