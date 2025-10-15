function toggleTheme() {
            const body = document.body;
            const button = document.querySelector('.theme-toggle');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                button.textContent = '🌙'; // Луна для светлой темы
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                button.textContent = '☀️'; // Солнце для темной темы
                localStorage.setItem('theme', 'dark');
            }
        }
        
// Загрузка сохраненной темы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const button = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        button.textContent = '☀️';
    }
});