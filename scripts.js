// Smooth scrolling for job openings section
document.querySelectorAll('.job-openings .card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Smooth scrolling for job openings section
document.querySelectorAll('.job-openings .card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Initialize carousel for testimonials
$('.carousel').carousel({
    interval: 5000,
    pause: 'hover'
});
