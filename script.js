// 1. Make sure the name shows up
document.getElementById('valentineTitle').innerText = "Will you be my Valentine, " + config.valentineName + "?";

let noCount = 0;

function handleNoClick() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    
    // Change "No" text based on your config messages
    if (noCount < config.noMessages.length) {
        noBtn.innerText = config.noMessages[noCount];
    }
    
    // Make "Yes" button bigger
    noCount++;
    const newSize = 1.2 + (noCount * 0.5); 
    yesBtn.style.transform = `scale(${newSize})`;
    
    // Optional: Move the "No" button slightly each time
    const x = Math.random() * 20 - 10;
    const y = Math.random() * 20 - 10;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Simple music toggle
const music = document.getElementById('bgMusic');
document.getElementById('musicToggle').onclick = () => {
    if (music.paused) { music.play(); } else { music.pause(); }
};
