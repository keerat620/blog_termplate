// Newsletter Subscription Form
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector(".newsletter form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector("input[type='email']").value;
    if (validateEmail(email)) {
      alert(`Thank you for subscribing, ${email}!`);
      this.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Contact Form
  const contactForm = document.querySelector(".contact form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.querySelector("input[type='text']").value.trim();
    const email = this.querySelector("input[type='email']").value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (name && validateEmail(email) && message) {
      alert(`Thank you ${name}, we will contact you soon.`);
      this.reset();
    } else {
      alert("Please fill in all fields with valid information.");
    }
  });
});

// Email Validation Function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
