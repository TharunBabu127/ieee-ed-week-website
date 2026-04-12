// Set target date to 16 April 2026, 11:00 AM IST
// IST is UTC+5:30
const targetDateStr = "2026-04-16T11:00:00+05:30";
const targetDate = new Date(targetDateStr).getTime();

// Countdown UI Elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the countdown is successfully running and greater than zero
    if (distance > 0) {
        daysEl.textContent = days < 10 ? '0' + days : days;
        hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    } else {
        // If event started
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        document.querySelector('.text-ieee').textContent = "Contest has begun!";
    }
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// Intersection Observer for scroll animations (Subtle fade in)
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% item visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once faded in to avoid re-triggering constantly
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(item => {
        observer.observe(item);
    });
});
