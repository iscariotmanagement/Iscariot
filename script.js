const space = document.querySelector(".space");
const leftCard = document.querySelector(".profile-card");
const centerCard = document.querySelector(".center-card");
const rightCard = document.querySelector(".links-card");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;


/* Track mouse position */
document.addEventListener("mousemove", (e) => {

    // -1 on left/top, +1 on right/bottom
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;

});


/* Smooth animation */
function animate() {

    // smoothly catch up to cursor
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;


    /*
        WHOLE SCENE

        Moving mouse right rotates the "camera view"
        Moving mouse vertically changes vertical perspective.
    */

    space.style.transform = `
        rotateY(${currentX * -5}deg)
        rotateX(${currentY * 3}deg)
    `;


    /*
        LEFT CARD

        Still angled inward, but reacts slightly
        differently from the rest of the scene.
    */

    leftCard.style.transform = `
        translate3d(
            ${currentX * -12}px,
            ${currentY * -8}px,
            -20px
        )
        rotateY(${12 + currentX * -3}deg)
        rotateX(${currentY * 2}deg)
        rotateZ(1.5deg)
    `;


    /*
        CENTER CARD

        Closest object, so it moves MORE.
        This creates parallax.
    */

    centerCard.style.transform = `
        translate3d(
            ${currentX * -22}px,
            ${10 + currentY * -14}px,
            80px
        )
        rotateY(${currentX * -3}deg)
        rotateX(${currentY * 2}deg)
    `;


    /*
        RIGHT CARD
    */

    rightCard.style.transform = `
        translate3d(
            ${currentX * -12}px,
            ${currentY * -8}px,
            -20px
        )
        rotateY(${-12 + currentX * -3}deg)
        rotateX(${currentY * 2}deg)
        rotateZ(-1.5deg)
    `;


    requestAnimationFrame(animate);
}

animate();
