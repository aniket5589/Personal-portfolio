document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Form Validation
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Reset errors
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        successMsg.classList.add('hidden');

        // Name
        const name = document.getElementById('name').value.trim();
        if (!name) {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        }

        // Email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email';
            isValid = false;
        }

        // Phone
        const phone = document.getElementById('phone').value.trim();
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phone) {
            document.getElementById('phone-error').textContent = 'Phone number is required';
            isValid = false;
        } else if (!phoneRegex.test(phone) || phone.length < 7) {
            document.getElementById('phone-error').textContent = 'Please enter a valid phone number';
            isValid = false;
        }

        // Message
        const message = document.getElementById('message').value.trim();
        if (!message) {
            document.getElementById('message-error').textContent = 'Message is required';
            isValid = false;
        }

        if (isValid) {
            successMsg.classList.remove('hidden');
            form.reset();
        }
    });

    // Fade-in Animation on Scroll
    const fadeElements = document.querySelectorAll('.section');
    
    // Add fade-in class to all sections
    fadeElements.forEach(el => el.classList.add('fade-in'));

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});
