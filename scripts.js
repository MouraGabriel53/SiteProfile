function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const imgProfile = document.querySelector("#imgProfile")
  const iconMode = document.querySelector("#iconMode")
  const imgPython = document.querySelector("#imgPython")
  const imgCpp = document.querySelector("#imgCpp")
  const imgHtml = document.querySelector("#imgHtml")
  const imgCss = document.querySelector("#imgCss")
  const imgJs = document.querySelector("#imgJs")

  if (html.classList.contains("light")) {
    imgProfile.setAttribute("src", "./assets/icons/logo-light.png")
    iconMode.setAttribute("src", "./assets/icons/day-icon.svg")
    imgPython.setAttribute("src", "./assets/logo-languages/python-dark.svg")
    imgCpp.setAttribute("src", "./assets/logo-languages/cpp-dark.svg")
    imgHtml.setAttribute("src", "./assets/logo-languages/html-dark.svg")
    imgCss.setAttribute("src", "./assets/logo-languages/css-dark.svg")
    imgJs.setAttribute("src", "./assets/logo-languages/js-dark.svg")
    
  } else {
    imgProfile.setAttribute("src", "./assets/icons/logo-dark.png")
    iconMode.setAttribute("src", "./assets/icons/night-icon.svg")
    imgPython.setAttribute("src", "./assets/logo-languages/python-light.svg")
    imgCpp.setAttribute("src", "./assets/logo-languages/cpp-light.svg")
    imgHtml.setAttribute("src", "./assets/logo-languages/html-light.svg")
    imgCss.setAttribute("src", "./assets/logo-languages/css-light.svg")
    imgJs.setAttribute("src", "./assets/logo-languages/js-light.svg")
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
