<<<<<<< HEAD:dashboard.js
// 🌙 Dark mode toggle logic
document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  // Change icon for visual feedback
  this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  showNotification(`Switched to ${document.body.classList.contains('dark-mode') ? 'Dark' : 'Light'} Mode`);
});

// ✅ Simple notification popup
function showNotification(msg) {
  let note = document.createElement('div');
  note.textContent = msg;
  note.style.position = 'fixed';
  note.style.bottom = '30px';
  note.style.right = '30px';
  note.style.background = '#333';
  note.style.color = '#fff';
  note.style.padding = '12px 24px';
  note.style.borderRadius = '8px';
  note.style.zIndex = '9999';
  note.style.fontSize = '1em';
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 2000);
}

// 📅 Handle month input changes
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.getElementById('monthInput').addEventListener('change', () => {
  const [year, month] = document.getElementById('monthInput').value.split('-');
  currentYear = parseInt(year);
  currentMonth = parseInt(month) - 1;
  // Optionally reset or update data here
  // attendanceData = [];
  // calendarStatus = [];
  // pendingChanges = [];
  // generateHeader();
});

// 🏅 Badge logic and chart rendering
document.addEventListener("DOMContentLoaded", function () {
  // Example values, replace with your real logic
  const streak = 7;
  const topicsToday = 5;
  const totalTopics = 20;

  if (document.getElementById("badge1") && streak >= 7) {
    document.getElementById("badge1").style.opacity = 1;
  }
  if (document.getElementById("badge2") && topicsToday >= 5) {
    document.getElementById("badge2").style.opacity = 1;
  }
  if (document.getElementById("badge3") && totalTopics >= 20) {
    document.getElementById("badge3").style.opacity = 1;
  }

  // 📊 Progress chart
  const chartElem = document.getElementById('progressChart');
  if (chartElem) {
    const ctx = chartElem.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Topics Covered',
          data: [2, 3, 1, 4, 3, 2, 0], // Replace with real data
          backgroundColor: [
            '#80deea', '#b388ff', '#4b0082', '#2c3e50', '#007acc', '#ff5733', '#ffcc00'
          ]
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
});
=======
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

>>>>>>> origin/main:frontend/dashboard.js
