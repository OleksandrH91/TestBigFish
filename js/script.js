document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const leadForm = document.getElementById('leadForm');

    // Мобильное меню
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Закрытие меню при клике по ссылкам
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Валидация и отправка формы
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = leadForm.querySelector('input[type="text"]').value;
        const phone = leadForm.querySelector('input[type="tel"]').value;

        alert(`Дякуємо, ${name}! Вашу заявку успішно відправлено. Ми зв'яжемося з вами за номером ${phone}.`);
        
        leadForm.reset();
    });
});
