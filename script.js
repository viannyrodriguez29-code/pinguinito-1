const btnRandom = document.querySelector("#random-btn");

function moverAleatoriamente(btn) {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.position = "absolute";
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
}

// En escritorio
btnRandom.addEventListener("mouseenter", (e) => {
    moverAleatoriamente(e.target);
});

// En celular
btnRandom.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverAleatoriamente(e.target);
});