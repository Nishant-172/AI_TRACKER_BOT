// Dark Mode Toggle Button Select kro
const toggleThemeButton = document.getElementById('toggle-theme');

// Event Listener for Dark Mode Toggle
toggleThemeButton.addEventListener('click', () => {
  // Body pe dark-mode class toggle kro
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container').classList.toggle('dark-mode'); // Container dark mode

  // Change Button Text & Emoji
  if (document.body.classList.contains('dark-mode')) {
    toggleThemeButton.textContent = '☀️ Light Mode'; // Agar dark mode on hai
  } else {
    toggleThemeButton.textContent = '🌙 Dark Mode'; // Agar dark mode off hai
  }

  // Task List Items Ko Bhi Update Karo
  const taskItems = document.querySelectorAll('#task-list li');
  taskItems.forEach((item) => {
    item.classList.toggle('dark-mode'); // Har item ke liye dark mode toggle
  });
});
