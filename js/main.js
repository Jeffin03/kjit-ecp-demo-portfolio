// Sprint 3 - interaction
const root = document.documentElement
const toggle = document.querySelector("#theme-toggle")

toggle?.addEventListener("click", () => {
  const dark = root.dataset.theme !== "dark"
  root.dataset.theme = dark ? "dark" : "light"
  localStorage.setItem("theme", root.dataset.theme)
})

const form = document.querySelector("#contact form")
form?.addEventListener("submit", (event) => {
  event.preventDefault()
  const email = form.querySelector("#email")
  if (!email.checkValidity()) {
    email.setAttribute("aria-invalid", "true")
    email.focus()
    return
  }
  email.removeAttribute("aria-invalid")
  form.reset()
  console.info("contact form submitted")
})
