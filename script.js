document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    // Optionally, you can use AJAX to send the message to your email or server.
});
