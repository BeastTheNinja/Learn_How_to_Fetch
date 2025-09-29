async function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let count = 5;

    while (count >= 0) {
        countdownElement.textContent = count;
        await sleep(1000); // Vent i 1 sekund (1000 millisekunder)
        count--;
    }

    countdownElement.textContent = "Færdig!";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

startCountdown();