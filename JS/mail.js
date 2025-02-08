// Select the form and the message div
const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to handle validation

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        displayMessage('All fields are required!', 'error');
    } else if (!validateEmail(email)) {
        displayMessage('Please enter a valid email address!', 'error');
    } else {
        displayMessage('Your message has been sent successfully!', 'success');
        form.reset();  // Reset the form fields after successful submission
    }
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Display message function
function displayMessage(message, type) {
    messageDiv.textContent = message;
    if (type === 'success') {
        messageDiv.style.color = 'green';
    } else {
        messageDiv.style.color = 'red';
    }
}
