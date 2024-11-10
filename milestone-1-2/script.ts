// Selecting the toggle button and skills list elements
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLDivElement;

// Adding an event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Checking the display status and toggling it
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block';
        toggleButton.textContent = 'Hide Skills'; // Change button text to 'Hide Skills'
    } else {
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Show Skills'; // Change button text back to 'Show Skills'
    }
});
