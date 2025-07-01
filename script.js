function generateQR() {
    const container = document.getElementById("qrcode");
    container.innerHTML = ""; // borrar QR anterior
    const text = document.getElementById("text").value;
    if (!text.trim()) return;

    new QRCode(container, {
        text: text,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    launchConfetti(); // 🎉
}

function launchConfetti() {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
    script.onload = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };
    document.body.appendChild(script);
}
