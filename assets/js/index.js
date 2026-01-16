/* =====================
   INTERSECTION OBSERVER
===================== */
const fadeElements = document.querySelectorAll('.fade-in');
const aboutSection = document.querySelector('.about');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.25 }
);

/* Observe About (special animation) */
if (aboutSection) observer.observe(aboutSection);

/* Observe all fade-in sections */
fadeElements.forEach(el => observer.observe(el));


/* =====================
   MOBILE NAV TOGGLE
===================== */
const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelector('.nav_links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* Close menu on link click */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


  (function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // from EmailJS
  })();

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(
      () => {
        alert("Message sent successfully!");
        form.reset();
      },
      (error) => {
        alert("Something went wrong. Please try again.");
        console.error(error);
      }
    );
  });