const cards = document.querySelectorAll(".card");

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

    cards.forEach(card => {

        card.style.marginTop =
            `${y * 5}px`;

    });

});
