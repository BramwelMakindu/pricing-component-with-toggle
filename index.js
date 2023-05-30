const toggle = document.querySelector('.toggle');

const items = document.querySelectorAll('.monthly,.annually,.toggle-ball');


toggle.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('active');
    });
});