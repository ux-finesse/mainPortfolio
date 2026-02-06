// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

setTheme(getPreferredTheme());

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) setTheme(e.matches ? "light" : "dark");
  });
