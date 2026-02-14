let noCount = 0;

// Initialize Name and Music
window.onload = () => {
    document.getElementById('valentineTitle').innerText = "Will you be my Valentine, " + config.valentineName + "?";
    document.getElementById('musicSource').src = config.musicUrl;
    document.getElementById('bgMusic').load();
};

function handleNoClick() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const mainGif = document.getElementById('mainGif');
    const music = document.getElementById('bgMusic');

    // Play music on first click
    if (music.paused) music.play();

    // Change text and image
    if (noCount < config.noMessages.length) {
        noBtn.innerText = config.noMessages[noCount];
        mainGif.src = config.images[noCount + 1] || config.images[0];
    }

    // Grow Yes button
    noCount++;
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.5) + "px";
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
