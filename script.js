const launchButton = document.getElementById('launchButton');
const rocket = document.querySelector('.rocket');

launchButton.addEventListener('click', () => {
  // Add the launching class to trigger the animation
  rocket.classList.add('launching');

  // Redirect to the URL after the animation completes
  setTimeout(() => {
    window.location.href = 'https://replit.com/';
  }, 2000); // Adjust the timing if needed
});
