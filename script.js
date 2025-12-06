/**
 * Smoothly scrolls the window to the featured products section (Shop Now button functionality).
 */
function scrollToShop() {
    // Get the featured section element
    const featuredSection = document.getElementById('featured');
    
    // Check if the element exists before attempting to scroll
    if (featuredSection) {
        featuredSection.scrollIntoView({ 
            behavior: 'smooth' // Smooth scrolling effect
        });
    }
}

// You can add more JavaScript here for features like:
// - Simple shopping cart functionality (using localStorage)
// - Image carousel for the hero section
// - Form validation for the contact page
