// Selecting the toggle button and skills list elements
var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
// Adding an event listener to the toggle button
toggleButton.addEventListener('click', function () {
    // Checking the display status and toggling it
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block';
        toggleButton.textContent = 'Hide Skills'; // Change button text to 'Hide Skills'
    }
    else {
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Show Skills'; // Change button text back to 'Show Skills'
    }
});
