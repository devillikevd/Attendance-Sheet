document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Toggle the icon
  this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});