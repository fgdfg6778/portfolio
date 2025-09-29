// Project filtering
const tagButtons = document.querySelectorAll('.featured-projects__tag');
const projectCards = document.querySelectorAll('.featured-projects__card');
tagButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const tag = this.getAttribute('data-tag');
        tagButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        projectCards.forEach(card => {
            if (tag === 'All' || card.getAttribute('data-tags').includes(tag)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
document.querySelector('.featured-projects__tag[data-tag="All"]').classList.add('active');
