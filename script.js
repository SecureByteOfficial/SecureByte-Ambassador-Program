// Countdown Timer
const countdown = document.getElementById('countdown');

const targetDate = new Date('2024-12-31T23:59:59').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdown.innerHTML = `<h3>Application Is Over</h3>`;
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <div>
            <h3>${days}</h3><p>Days</p>
        </div>
        <div>
            <h3>${hours}</h3><p>Hours</p>
        </div>
        <div>
            <h3>${minutes}</h3><p>Minutes</p>
        </div>
        <div>
            <h3>${seconds}</h3><p>Seconds</p>
        </div>
    `;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.faq');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');

    answer.style.display = 'none';

    question.addEventListener('click', () => {
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block';
        question.classList.toggle('active', !isVisible);
    });
});
