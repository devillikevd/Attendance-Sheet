document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Toggle the icon
  this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger'); // select the hamburger icon
const navLinks = document.querySelector('.nav-links'); // select the menu links

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // toggle "active" class to show/hide menu
});
