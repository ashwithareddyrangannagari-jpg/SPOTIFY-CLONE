SCRIPT.JS
// Show greeting based on time
const hour = new Date().getHours();
if (hour < 12) {
  document.getElementById('greeting').textContent = 'Good morning';
} else if (hour < 18) {
  document.getElementById('greeting').textContent = 'Good afternoon';
} else {
  document.getElementById('greeting').textContent = 'Good evening';
}

// Play / Pause button
let isPlaying = true;
document.getElementById('playBtn').addEventListener('click', function() {
  isPlaying = !isPlaying;
  this.textContent = isPlaying ? '⏸' : '▶';
});