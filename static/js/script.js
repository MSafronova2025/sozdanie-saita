document.addEventListener('DOMContentLoaded', () => {
    // Навигация по разделам
    const buttons = document.querySelectorAll(".subnav .btn[data-target]");
    const sections = document.querySelectorAll(".section");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute("data-target");

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        });
    });

    // Показываем "Об автошколе" по умолчанию (если есть элемент с id="about")
    const defaultSection = document.getElementById("about");
    if (defaultSection) {
        defaultSection.classList.add("active");
    }

    // JavaScript для раскрытия списка новостей
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const newsList = document.querySelector("ul");

    if (dropdownBtn && newsList) {
        dropdownBtn.addEventListener("click", () => {
            const isVisible = newsList.style.display === "block";
            newsList.style.display = isVisible ? "none" : "block";
            dropdownBtn.classList.toggle("open", !isVisible);
        });
    }

    // Автоматическая смена слайдов
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    if (slides.length > 0) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 3000); // каждые 3 секунды
    }
});
