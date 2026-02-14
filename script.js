// Fill in the name and title from config
document.getElementById('valentineTitle').innerText = `Will you be my Valentine, ${config.valentineName}?`;
document.getElementById('musicSource').src = config.musicUrl;

let noClickCount = 0;

function handleNoClick() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    
    // Change "No" text
    if (noClickCount < config.noMessages.length) {
        noBtn.innerText = config.noMessages[noClickCount];
    }
    
    // Make "Yes" button grow
    noClickCount++;
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 15) + "px";
    yesBtn.style.padding = (currentSize) + "px " + (currentSize * 2) + "px";
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Music Toggle
const music = document.getElementById('bgMusic');
document.getElementById('musicToggle').onclick = () => {
    if (music.paused) { music.play(); } else { music.pause(); }
};
