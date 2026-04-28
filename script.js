// MOBILE MENU

function openMenu() {
    document.body.classList.add('menu--open');
}

function closeMenu() {
    document.body.classList.remove('menu--open');
}

// FAQ ACCORDION

function toggleFaq(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq__item').forEach(el => el.classList.remove('open'));

    // Toggle clicked
    if (!isOpen) {
        item.classList.add('open');
    }
}

// TESTIMONIALS

const testimonials = [
    {
        title: "Amazing User Experience",
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        name: "Charlotte Hale",
        role: "Director, Delos Inc.",
        avatar: "photo-1494790108377-be9c29b29330"
    },
    {
        title: "Outstanding Templates",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
        name: "Adam Cuppy",
        role: "Founder, EventsNYC",
        avatar: "photo-1531427186611-ecfd6d936c79"
    },
    {
        title: "Best Purchase Decision",
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud.",
        name: "Steven Russel",
        role: "CEO, Cyberdyne Inc.",
        avatar: "photo-1494790108377-be9c29b29330"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const t = testimonials[currentTestimonial];
    document.getElementById('testimonialTitle').textContent = t.title;
    document.getElementById('testimonialQuote').textContent = t.quote;
    document.getElementById('testimonialName').textContent = t.name;
    document.getElementById('testimonialRole').textContent = t.role;
    document.getElementById('testimonialAvatar').src = t.avatar;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}
