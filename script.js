const scene = document.querySelector(".space");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (event) => {

    // mouse position from -1 to +1
    targetX = (event.clientX / window.innerWidth - 0.5) * 2;
    targetY = (event.clientY / window.innerHeight - 0.5) * 2;

});

function animate() {

    // smooth interpolation
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    // Move the entire 3D world opposite the cursor
    scene.style.transform = `
        rotateX(${currentY * -7}deg)
        rotateY(${currentX * 11}deg)
        translateX(${currentX * -18}px)
        translateY(${currentY * -10}px)
    `;

    requestAnimationFrame(animate);
}

animate();
