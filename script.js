// Initialize AOS (Animate On Scroll) library
AOS.init({
    once: true, // Animations happen only once when scrolling down
    mirror: false, // Elements do not animate out when scrolling past them
});

// JavaScript for mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Add click event listener to the mobile menu button
mobileMenuButton.addEventListener('click', () => {
    // Toggle the 'hidden' class to show/hide the mobile menu
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a navigation link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Add the 'hidden' class to hide the mobile menu
        mobileMenu.classList.add('hidden');
    });
});

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
    // Show button after scrolling 300px down
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
        scrollToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
    } else {
        // Hide button if scroll position is less than 300px
        scrollToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
        scrollToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
    }
});

// Add click event listener to the scroll to top button
scrollToTopBtn.addEventListener('click', () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
