// Add basic form validation and display a simple alert for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else {
    alert(`Thank you, ${name}. Your message has been sent!`);
  }

  // Clear the form
  document.getElementById('contactForm').reset();
});
