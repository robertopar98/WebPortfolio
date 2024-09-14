
function toggleDetails(iconElement) {
    const details = iconElement.nextElementSibling;
    const iconImage = iconElement.querySelector('img');

    if (details.style.display === "block") {
        details.style.display = "none";
        iconImage.src = "assets/images/down.png";
    } else {
        details.style.display = "block";
        iconImage.src = "assets/images/up.png";
    }
};



document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle-img');
    const lightModeImage = 'assets/images/day-mode-icon.png';
    const darkModeImage  = 'assets/images/night-mode-icon.png';




    // Check if there's a saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    
    // Apply the saved theme
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Adjust the button label based on the theme
        if (currentTheme === 'dark') {
            darkModeToggle.textContent = 'Light Mode';
            darkModeToggle.src = darkModeImage;
        } else {
            darkModeToggle.src = lightModeImage;
        }
    } else {
        darkModeToggle.src = lightModeImage;
    }

    // Add event listener to toggle button
    darkModeToggle.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Toggle dark mode
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light'); // Save preference in localStorage
            darkModeToggle.textContent = 'Dark Mode'; // Update the button label
            darkModeToggle.src = lightModeImage;
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Save preference in localStorage
            darkModeToggle.textContent = 'Light Mode'; // Update the button label
            darkModeToggle.src = darkModeImage;
        }
    });
});


function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
    } else {
        navLinks.classList.add("active");
    }
}