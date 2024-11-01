document.getElementById('launchButton').addEventListener('click', function() {
    const rocket = document.getElementById('rocket');
    const logo = document.getElementById('logo');

    // Animate the rocket
    rocket.style.transition = 'transform 2s ease-in-out';
    rocket.style.transform = 'translate(-50%, -100vh)'; // Move the rocket up

    // Show the logo after the rocket has launched
    setTimeout(() => {
        logo.style.display = 'block';
        logo.classList.remove('hidden');
    }, 2000); // Show logo after 2 seconds
});
const rocket = document.getElementById("rocket");
const launchButton = document.getElementById("launchButton");
const presentationMessage = document.getElementById("presentationMessage");
const smokeContainer = document.getElementById("smokeContainer");

launchButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Hide the launch button
    launchButton.style.display = "none";

    // Function to create smoke particles with fade-out effect
    function createSmoke() {
        const smoke = document.createElement("div");
        smoke.classList.add("smoke");
        smokeContainer.appendChild(smoke);
    
        // Randomize smoke position
        smoke.style.left = `${Math.random() * 60 - 30}px`;
    
        // Remove smoke after it fades out faster
        setTimeout(() => {
            smoke.remove();
        }, 700); // Matches the 0.7s animation duration
    }
    

    // Start generating smoke particles very frequently
    const smokeInterval = setInterval(createSmoke, 30);

    // Move the rocket to the top of the screen
    rocket.style.transition = "transform 2s ease-in";
    rocket.style.transform = "translate(-50%, -100vh)";

    // Stop generating smoke once rocket reaches the top
    setTimeout(() => {
        clearInterval(smokeInterval);

        // Show the presentation message after the rocket reaches the top
        presentationMessage.style.opacity = "1";

        // Redirect after the message displays
        setTimeout(() => {
            window.location.href = launchButton.href;
        }, 2000);
    }, 2000);
});
