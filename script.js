document.addEventListener("mousemove", function (event) {
    document.body.style.backgroundColor =
        `rgb(${Math.floor(event.clientX / window.innerWidth * 80)}, 0, 0)`;
});
