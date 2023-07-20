// Access the contact form and handle form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // You can handle the form submission here, for example, sending the data to a server or API.
  // For the sake of this example, let's just log the data to the console.
  console.log('Form Data:', { name, email, message });

  // Clear the form fields after submission
  contactForm.reset();
});
