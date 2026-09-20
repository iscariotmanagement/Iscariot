const scene = document.querySelector(".space");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animate() {
    // smooth movement
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    // rotate the WHOLE environment
    scene.style.transform =
        `rotateX(${currentY * -5}deg)
         rotateY(${currentX * 8}deg)`;

    requestAnimationFrame(animate);
}

animate();
