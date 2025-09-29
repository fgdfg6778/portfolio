// Dark mode toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');
darkModeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});
