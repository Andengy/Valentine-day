const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// When she clicks YES
yesBtn.addEventListener("click", () => {
    response.innerHTML = "YAYYY!! 💖 I can't wait to spend Valentine's with you 🥰";
    launchConfetti();
});

// Make the NO button run away
noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Simple confetti effect
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.backgroundColor = 
            `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-10px";
        confetti.style.opacity = "0.7";
        confetti.style.borderRadius = "50%";
        confetti.style.transition = "transform 3s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform = 
                `translateY(${window.innerHeight}px)`;
        }, 10);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}
