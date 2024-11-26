// Timer elements
const startButton = document.getElementById('start-timer'); // Start button ko pakda
const resetButton = document.getElementById('reset-timer'); // Reset button ko pakda
const minutesSpan = document.getElementById('minutes'); // Minutes span ko pakda
const secondsSpan = document.getElementById('seconds'); // Seconds span ko pakda

// Custom time elements
const customTimeBtn = document.getElementById('custom-time-btn'); // Custom time button pakda
const customTimeDiv = document.getElementById('custom-time'); // Input field container ko pakda
const customMinutesInput = document.getElementById('custom-minutes'); // Input field ko pakda
const setTimeButton = document.getElementById('set-time'); // Set time button ko pakda

let timer; // Timer reference
let totalSeconds = 1500; // Default time (25 minutes)

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  minutesSpan.textContent = minutes.toString().padStart(2, '0'); // Minutes ko format kiya
  secondsSpan.textContent = seconds.toString().padStart(2, '0'); // Seconds ko format kiya
}

// Start button functionality
startButton.addEventListener('click', () => {
  if (timer) return; // Agar timer chal raha hai toh kuch mat karo
  timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--; // Seconds reduce karo
      updateTimerDisplay(); // Display update karo
    } else {
      clearInterval(timer); // Timer stop karo jab khatam ho jaye
      alert('Pomodoro Complete!'); // User ko notify karo
    }
  }, 1000);
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  clearInterval(timer); // Timer ko stop karo
  timer = null;
  totalSeconds = 1500; // Default time reset karo
  updateTimerDisplay(); // Display ko reset karo
});

// Show custom time input field
customTimeBtn.addEventListener('click', () => {
  customTimeDiv.classList.toggle('hidden'); // Input field toggle karo
});

// Set custom time
setTimeButton.addEventListener('click', () => {
  const customMinutes = parseInt(customMinutesInput.value); // User input read karo
  if (isNaN(customMinutes) || customMinutes < 1) {
    alert('Please enter a valid number of minutes!'); // Input validation
    return;
  }
  totalSeconds = customMinutes * 60; // Custom time set karo
  updateTimerDisplay(); // Display update karo
  customTimeDiv.classList.add('hidden'); // Input field ko hide karo
});
