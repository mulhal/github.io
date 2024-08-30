document.addEventListener('DOMContentLoaded', function() {
    console.log("Website is fully loaded and ready.");

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Pop-up functionality
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Show the popup after 3 seconds
    setTimeout(function() {
        popup.style.display = "block";
    }, 3000);

    // Close the popup when the user clicks the close button
    closePopup.onclick = function() {
        popup.style.display = "none";
    }

    // Close the popup when the user clicks outside of the popup content
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});
