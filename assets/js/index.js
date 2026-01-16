// const aboutSection = document.querySelector('.about');

//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting) {
//         aboutSection.classList.add('show');
//       }
//     },
//     { threshold: 0.3 }
//   );

//   observer.observe(aboutSection);

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