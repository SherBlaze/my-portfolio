document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");

    function checkScroll() {
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Проверить сразу при загрузке
});
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".code-rain-container");
    const symbols = ["0", "1", "{", "}", "(", ")", ";", "=", "+", "-", "<", ">", "var", "let", "const"];

    function createCodeSymbol() {
        const symbol = document.createElement("span");
        symbol.classList.add("code-symbol");
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        // Случайное положение по ширине экрана
        symbol.style.left = Math.random() * 100 + "vw";

        // Задержка старта анимации для эффекта естественного дождя
        symbol.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 сек
        symbol.style.animationDelay = Math.random() * 2 + "s"; // 0-2 сек

        container.appendChild(symbol);

        // Удаление символа после завершения анимации
        setTimeout(() => {
            symbol.remove();
        }, 5000);
    }

    // Запускаем генерацию символов каждые 100 мс
    setInterval(createCodeSymbol, 100);
});
