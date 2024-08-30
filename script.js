document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll functionality
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Show pop-up modal on page load
    showPopup();

    // Form submission handler
    function handleFormSubmit(event) {
        event.preventDefault();
        const email = document.getElementById('popup-email').value;
        const phone = document.getElementById('popup-phone').value;
        const messageElement = document.getElementById('popup-message');

        // Basic validation
        if (!validateEmail(email)) {
            messageElement.textContent = "Invalid email format.";
            messageElement.style.color = "red";
            return false;
        }
        if (!validatePhone(phone)) {
            messageElement.textContent = "Invalid phone format.";
            messageElement.style.color = "red";
            return false;
        }

        // Simulate checking if the information is already provided
        const existingEntry = checkExistingEntry(email, phone);
        if (existingEntry === 'email') {
            messageElement.textContent = "Email already used with a different phone number.";
            messageElement.style.color = "red";
            return false;
        } else if (existingEntry === 'phone') {
            messageElement.textContent = "Phone number already used with another email address.";
            messageElement.style.color = "red";
            return false;
        } else if (existingEntry === 'both') {
            messageElement.textContent = "Information has already been provided.";
            messageElement.style.color = "blue";
            return false;
        }

        // Simulate a successful submission
        saveInformation(email, phone);
        messageElement.textContent = "Thank you! You have been signed up.";
        messageElement.style.color = "green";

        // Simulate sending email (actual implementation needed)
        sendEmail(email, phone);

        return false;
    }

    // Show the pop-up modal
    function showPopup() {
        document.getElementById('popup-modal').style.display = "block";
    }

    // Close the pop-up modal
    function closePopup() {
        document.getElementById('popup-modal').style.display = "none";
    }

    // Close the pop-up modal when clicking outside the content
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('popup-modal');
        if (event.target === modal) {
            closePopup();
        }
    });

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Phone validation
    function validatePhone(phone) {
        const re = /^\d{10}$/; // Example: Adjust according to your requirements
        return re.test(String(phone));
    }

    // Simulate checking if the information is already provided
    function checkExistingEntry(email, phone) {
        // Replace this with an actual check against your data store
        // For example purposes, we assume 'email' is already used with a different phone, 'phone' with a different email, and 'both' if both match previously provided info.
        const mockData = [
            { email: "test@example.com", phone: "1234567890" },
            { email: "user@example.com", phone: "0987654321" }
        ];

        const emailMatch = mockData.find(entry => entry.email === email);
        const phoneMatch = mockData.find(entry => entry.phone === phone);

        if (emailMatch && phoneMatch) {
            if (emailMatch.phone === phone) {
                return 'both';
            } else {
                return 'email';
            }
        } else if (phoneMatch) {
            return 'phone';
        }
        return null;
    }

    // Simulate saving information
    function saveInformation(email, phone) {
        // Replace this with actual saving logic
        console.log('Information saved:', email, phone);
    }

    // Simulate sending email
    function sendEmail(email, phone) {
        // Replace this with actual email sending logic
        console.log('Email sent to:', email, phone);
    }
});
