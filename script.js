document.getElementById('generate-link').addEventListener('click', function () {
         const number = document.getElementById('whatsapp-number').value.trim();
         const message = document.getElementById('message').value.trim();

         if (number && message) {
             const encodedMessage = encodeURIComponent(message);
             const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;
             document.getElementById('generated-link').value = whatsappLink;
         } else {
             alert('Please enter a valid number and message.');
         }
     });

     document.getElementById('copy-link').addEventListener('click', function () {
         const linkInput = document.getElementById('generated-link');
         linkInput.select();
         document.execCommand('copy');
         alert('Link copied to clipboard!');
     });
