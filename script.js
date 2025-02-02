document.getElementById('generate-link').addEventListener('click', function () {
    // Get the WhatsApp number and message
    const number = document.getElementById('whatsapp-number').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate the number (must include country code and be numeric)
    if (!number || isNaN(number) || number.length < 10) {
        alert('Please enter a valid WhatsApp number with country code (e.g., 1234567890).');
        return;
    }

    // Validate the message
    if (!message) {
        alert('Please enter a message.');
        return;
    }

    // Generate the WhatsApp link
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;

    // Display the generated link
    document.getElementById('generated-link').value = whatsappLink;
});

document.getElementById('copy-link').addEventListener('click', function () {
    const linkInput = document.getElementById('generated-link');

    // Check if the link is empty
    if (!linkInput.value) {
        alert('No link generated yet!');
        return;
    }

    // Copy the link to the clipboard
    linkInput.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});
