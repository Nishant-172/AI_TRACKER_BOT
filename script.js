// Select elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const startTimerButton = document.getElementById('start-timer');
const resetTimerButton = document.getElementById('reset-timer');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const insightsContent = document.getElementById('insights-content');

// Add Task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = taskInput.value;
  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button class="delete-task">❌</button>`;
  taskList.appendChild(li);

  taskInput.value = '';
  updateInsights();
});

// Delete Task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-task')) {
    e.target.parentElement.remove();
    updateInsights();
  }
});

// Timer Functionality
let timer;
startTimerButton.addEventListener('click', () => {
  let minutes = parseInt(minutesDisplay.textContent);
  let seconds = parseInt(secondsDisplay.textContent);

  if (!timer) {
    timer = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(timer);
        timer = null;
        alert("Time's up!");
      } else if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }

      minutesDisplay.textContent = String(minutes).padStart(2, '0');
      secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }, 1000);
  }
});

resetTimerButton.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  minutesDisplay.textContent = '25';
  secondsDisplay.textContent = '00';
});

// Update Insights
function updateInsights() {
  const taskCount = taskList.children.length;
  insightsContent.innerHTML = `You have ${taskCount} task(s) left for today!`;
}
// js ends here