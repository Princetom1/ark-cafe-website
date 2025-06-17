// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Collapsible Sections (Menu Page)
  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const content = btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Testimonial Carousel (Home Page)
  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  if (testimonialCarousel) {
    const testimonials = testimonialCarousel.querySelectorAll('blockquote');
    let currentIndex = 0;

    // Hide all except first
    testimonials.forEach((t, i) => {
      t.style.display = i === 0 ? 'block' : 'none';
    });

    setInterval(() => {
      testimonials[currentIndex].style.opacity = '0';
      setTimeout(() => {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
        testimonials[currentIndex].style.opacity = '1';
      }, 500);
    }, 7000);
  }

  // Contact Form Validation & Submission Feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      formStatus.textContent = '';
      
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all required fields.';
        formStatus.style.color = 'red';
        return;
      }

      // Simple email regex for basic validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = 'Please enter a valid email address.';
        formStatus.style.color = 'red';
        return;
      }

      // Simulate form submission (no backend)
      formStatus.style.color = 'green';
      formStatus.textContent = 'Thank you! Your message has been sent.';

      // Reset form after submission
      contactForm.reset();
    });
  }
});