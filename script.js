document.addEventListener('DOMContentLoaded', function () {
     const popup = document.getElementById('popup');
     const whatsappNumberInput = document.getElementById('whatsapp-number');
     const messageInput = document.getElementById('message');
     const generateLinkButton = document.getElementById('generate-link');
     const whatsappLink = document.getElementById('whatsapp-link');
     const copyLinkButton = document.getElementById('copy-link');
     const linkOutput = document.getElementById('link-output');

     // Hide popup after 2 seconds
     setTimeout(() => {
       popup.style.display = 'none';
     }, 2000);

     // Generate WhatsApp link
     generateLinkButton.addEventListener('click', function () {
       const number = whatsappNumberInput.value.replace(/[^0-9]/g, '');
       const message = encodeURIComponent(messageInput.value);
       const link = `https://wa.me/${number}?text=${message}`;
       whatsappLink.href = link;
       whatsappLink.textContent = link;
       linkOutput.style.display = 'block';
     });

     // Copy link to clipboard
     copyLinkButton.addEventListener('click', function () {
       navigator.clipboard.writeText(whatsappLink.href);
       alert('Link copied to clipboard!');
     });
   });
