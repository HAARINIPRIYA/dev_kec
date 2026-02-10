// Mobile Menu Toggle
document.getElementById('mobileMenuBtn')?.addEventListener('click', function() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});

// Registration Form Validation
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateRegistrationForm()) {
            document.getElementById('registrationForm').style.display = 'none';
            document.getElementById('successMessage').classList.remove('hidden');
            // Reset form after delay
            setTimeout(() => {
                registrationForm.reset();
                document.getElementById('registrationForm').style.display = 'block';
                document.getElementById('successMessage').classList.add('hidden');
            }, 3000);
        }
    });
}

function validateRegistrationForm() {
    const form = document.getElementById('registrationForm');
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('#registrationForm .error').forEach(elem => elem.classList.add('hidden'));

    // Validate name fields
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName.length < 2) {
        document.querySelector('#firstName + .error').textContent = 'First name must be at least 2 characters';
        document.querySelector('#firstName + .error').classList.remove('hidden');
        isValid = false;
    }

    const lastName = document.getElementById('lastName').value.trim();
    if (lastName.length < 2) {
        document.querySelector('#lastName + .error').textContent = 'Last name must be at least 2 characters';
        document.querySelector('#lastName + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    if (!isValidEmail(email)) {
        document.querySelector('#email + .error').textContent = 'Please enter a valid email address';
        document.querySelector('#email + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone').value.trim();
    if (!isValidPhone(phone)) {
        document.querySelector('#phone + .error').textContent = 'Please enter a valid phone number';
        document.querySelector('#phone + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate department
    if (!document.getElementById('department').value) {
        document.querySelector('#department + .error').textContent = 'Please select a department';
        document.querySelector('#department + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate year
    if (!document.getElementById('year').value) {
        document.querySelector('#year + .error').textContent = 'Please select your year of study';
        document.querySelector('#year + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate college
    const college = document.getElementById('college').value.trim();
    if (college.length < 3) {
        document.querySelector('#college + .error').textContent = 'Please enter your college name';
        document.querySelector('#college + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate batch preference
    if (!document.getElementById('batchPreference').value) {
        document.querySelector('#batchPreference + .error').textContent = 'Please select a batch';
        document.querySelector('#batchPreference + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate learning mode
    if (!document.getElementById('mode').value) {
        document.querySelector('#mode + .error').textContent = 'Please select a learning mode';
        document.querySelector('#mode + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate experience
    if (!document.querySelector('input[name="experience"]:checked')) {
        const experienceError = document.querySelectorAll('#registrationForm .error')[8];
        if (experienceError) {
            experienceError.textContent = 'Please select your experience level';
            experienceError.classList.remove('hidden');
        }
        isValid = false;
    }

    // Validate terms
    if (!document.getElementById('terms').checked) {
        document.querySelectorAll('#registrationForm .error')[9].textContent = 'You must agree to the terms';
        document.querySelectorAll('#registrationForm .error')[9].classList.remove('hidden');
        isValid = false;
    }

    return isValid;
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateContactForm()) {
            contactForm.style.display = 'none';
            document.getElementById('contactSuccess').classList.remove('hidden');
            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                document.getElementById('contactSuccess').classList.add('hidden');
            }, 3000);
        }
    });
}

function validateContactForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('#contactForm .error').forEach(elem => elem.classList.add('hidden'));

    // Validate name
    const name = document.getElementById('contactName').value.trim();
    if (name.length < 2) {
        document.querySelector('#contactName + .error').textContent = 'Please enter your full name';
        document.querySelector('#contactName + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('contactEmail').value.trim();
    if (!isValidEmail(email)) {
        document.querySelector('#contactEmail + .error').textContent = 'Please enter a valid email address';
        document.querySelector('#contactEmail + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate category
    if (!document.getElementById('category').value) {
        document.querySelector('#category + .error').textContent = 'Please select an inquiry category';
        document.querySelector('#category + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate subject
    const subject = document.getElementById('subject').value.trim();
    if (subject.length < 3) {
        document.querySelector('#subject + .error').textContent = 'Subject must be at least 3 characters';
        document.querySelector('#subject + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate message
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        document.querySelector('#message + .error').textContent = 'Message must be at least 10 characters';
        document.querySelector('#message + .error').classList.remove('hidden');
        isValid = false;
    }

    return isValid;
}

// Login Form Validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateLoginForm()) {
            loginForm.style.display = 'none';
            document.getElementById('loginSuccess').classList.remove('hidden');
            // Simulate redirect after delay
            setTimeout(() => {
                alert('Redirecting to dashboard...');
                loginForm.reset();
                loginForm.style.display = 'block';
                document.getElementById('loginSuccess').classList.add('hidden');
            }, 2000);
        }
    });
}

function validateLoginForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('#loginForm .error').forEach(elem => elem.classList.add('hidden'));

    // Validate email/username
    const email = document.getElementById('loginEmail').value.trim();
    if (email.length < 3) {
        document.querySelector('#loginEmail + .error').textContent = 'Please enter your email or username';
        document.querySelector('#loginEmail + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('loginPassword').value;
    if (password.length < 6) {
        document.querySelector('#loginPassword + .error').textContent = 'Password must be at least 6 characters';
        document.querySelector('#loginPassword + .error').classList.remove('hidden');
        isValid = false;
    }

    return isValid;
}

// Sign Up Form Validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateSignupForm()) {
            signupForm.style.display = 'none';
            document.getElementById('signupSuccess').classList.remove('hidden');
            // Reset form after delay
            setTimeout(() => {
                signupForm.reset();
                signupForm.style.display = 'block';
                document.getElementById('signupSuccess').classList.add('hidden');
            }, 3000);
        }
    });
}

function validateSignupForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('#signupForm .error').forEach(elem => elem.classList.add('hidden'));

    // Validate first name
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName.length < 2) {
        document.querySelector('#firstName + .error').textContent = 'First name must be at least 2 characters';
        document.querySelector('#firstName + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate last name
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName.length < 2) {
        document.querySelector('#lastName + .error').textContent = 'Last name must be at least 2 characters';
        document.querySelector('#lastName + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('signupEmail').value.trim();
    if (!isValidEmail(email)) {
        document.querySelector('#signupEmail + .error').textContent = 'Please enter a valid email address';
        document.querySelector('#signupEmail + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone').value.trim();
    if (!isValidPhone(phone)) {
        document.querySelector('#phone + .error').textContent = 'Please enter a valid phone number';
        document.querySelector('#phone + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate country
    if (!document.getElementById('country').value) {
        document.querySelector('#country + .error').textContent = 'Please select a country';
        document.querySelector('#country + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('signupPassword').value;
    if (!isValidPassword(password)) {
        document.querySelector('#signupPassword + .error').textContent = 'Password must contain at least 8 characters, one uppercase, one number, and one special character';
        document.querySelector('#signupPassword + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.querySelector('#confirmPassword + .error').textContent = 'Passwords do not match';
        document.querySelector('#confirmPassword + .error').classList.remove('hidden');
        isValid = false;
    }

    // Validate terms
    if (!document.getElementById('terms').checked) {
        const termsError = document.querySelectorAll('#signupForm .error')[7];
        if (termsError) {
            termsError.textContent = 'You must agree to the terms';
            termsError.classList.remove('hidden');
        }
        isValid = false;
    }

    return isValid;
}

// Helper Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function isValidPassword(password) {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    return hasMinLength && hasUppercase && hasNumber && hasSpecial;
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.bg-white, .bg-gray-50, .bg-gradient-to').forEach(elem => {
    elem.style.opacity = '0';
    elem.style.transform = 'translateY(20px)';
    elem.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(elem);
});