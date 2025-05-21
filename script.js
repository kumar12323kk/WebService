const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

// WhatsApp form submission
const form = document.getElementById('serviceForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('clientName').value.trim();
  const business = document.getElementById('serviceType').value.trim();
  const phone = document.getElementById('phoneNumber').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !business || !phone || !message) {
    alert('Please fill all the fields!');
    return;
  }

  const whatsappMessage = `Hello, my name is ${name}. I own a ${business} business and need a website. Here is my message: ${message}. You can contact me at ${phone}.`;

  const whatsappURL = `https://wa.me/917397161516?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL, '_blank');
});
