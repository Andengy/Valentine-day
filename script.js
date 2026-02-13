const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("response") ? document.getElementById("noBtn") : null;
const response = document.getElementById("response");

// YES CLICK
yesBtn.addEventListener("click", () => {
    response.innerHTML = "My love 💖 You just made me the happiest man alive! 🥰✨";

    rapidHeartExplosion();
    showLoveGif();
});

// Make NO run away
document.getElementById("noBtn").addEventListener("mouseover", () => {
    const container = document.querySelector(".buttons");
    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
});


// 💥 RAPID FIRE HEART EXPLOSION
function rapidHeartExplosion() {

    const colors = ["#ff4d6d", "#ff1e4d"]; // Pink & Red

    let interval = setInterval(() => {

        for (let i = 0; i < 20; i++) { // how many per burst

            const heart = document.createElement("div");

            heart.innerHTML = "❤";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.bottom = "-20px";
            heart.style.fontSize = Math.random() * 25 + 15 + "px";
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.opacity = "1";
            heart.style.pointerEvents = "none";
            heart.style.transition = "transform 3s linear, opacity 3s ease-out";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.transform =
                    `translateY(-${window.innerHeight + 200}px)
                     translateX(${Math.random() * 300 - 150}px)
                     rotate(${Math.random() * 720}deg)`;
                heart.style.opacity = "0";
            }, 50);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }

    }, 120); // rapid fire speed

    setTimeout(() => {
        clearInterval(interval);
    }, 3500); // total explosion duration
}


// 🎞 GIF POPUP (INSERT YOUR GIF LINK BELOW)
function showLoveGif() {

    const gif = document.createElement("img");

    gif.src = ""; // 🔥 PASTE YOUR GIF LINK HERE

    gif.style.position = "fixed";
    gif.style.top = "50%";
    gif.style.left = "50%";
    gif.style.transform = "translate(-50%, -50%)";
    gif.style.width = "320px";
    gif.style.borderRadius = "20px";
    gif.style.boxShadow = "0 10px 40px rgba(0,0,0,0.4)";
    gif.style.zIndex = "9999";

    document.body.appendChild(gif);

    setTimeout(() => {
        gif.remove();
    }, 10000); // disappears after 10 seconds
}
