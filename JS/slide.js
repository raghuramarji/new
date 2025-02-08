let currentIndex = 0;
const cards = document.querySelectorAll('.edu-card');
const slider = document.querySelector('.edu-slider');
const totalCards = cards.length ;

// Set initial class to cards
function setCards() {
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('active');
            card.classList.remove('inactive');
        } else {
            card.classList.remove('active');
            card.classList.add('inactive');
        }
    });

    // This ensures the slider always slides smoothly when looping
    slider.style.transition = 'transform 1s ease';
    slider.style.transform = `translateX(-${currentIndex * 330}px)`;
}

// Move to next card, loop to the first when it reaches the end
function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    setCards();
}

// Move to previous card, loop to the last when it reaches the beginning
function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    setCards();
}

// Initialize first set of classes
setCards();

// Automatic slider movement (optional)
setInterval(nextCard, 3000); // Change every 3 seconds

// Click event to switch cards
slider.addEventListener('click', () => {
    nextCard();
});
