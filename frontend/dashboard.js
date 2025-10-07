document.addEventListener("DOMContentLoaded", function () {
  const streak = 7; // Replace with real streak logic
  const topicsToday = 5; // Replace with real value
  const totalTopics = 20; // Replace with real value

  if (streak >= 7) document.getElementById("badge1").style.opacity = 1;
  if (topicsToday >= 5) document.getElementById("badge2").style.opacity = 1;
  if (totalTopics >= 20) document.getElementById("badge3").style.opacity = 1;
});

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('progressChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Topics Covered',
        data: [2, 3, 1, 4, 3, 2, 0], // Replace with real data
        backgroundColor: 'rgba(0, 188, 212, 0.5)',
        borderColor: 'var(--primary)',
        borderWidth: 2,
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
});

document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Toggle the icon
  this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

