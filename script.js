const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
    response.innerHTML = "Clarise 💖 You just made me the happiest person alive! 🥰✨";
    launchValentineConfetti();
});

noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".buttons");
    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Valentine Confetti (Hearts + Pink/Red)
function launchValentineConfetti() {
    const colors = ["#ff4d6d", "#ff1e4d", "#ff99ac", "#ffccd5"];

    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "❤️";
        confetti.style.position = "fixed";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-20px";
        confetti.style.opacity = "0.8";
        confetti.style.transition = "transform 4s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform =
                `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
        }, 10);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}
