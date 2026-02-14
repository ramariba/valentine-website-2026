// Ensure config is loaded
if (typeof config === 'undefined') {
    console.error("Config not found! Make sure config.js is in the same folder.");
} else {
    document.getElementById('valentineTitle').innerText = "Will you be my Valentine, " + config.valentineName + "?";
}

let noCount = 0;
const music = document.getElementById('bgMusic');

function handleNoClick() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const mainGif = document.getElementById('mainGif');

    // Start music on first click
    if (music.paused) {
        music.play().catch(e => console.log("Music playback blocked"));
    }

    // 1. Swap Messages and Images
    if (noCount < config.noMessages.length) {
        noBtn.innerText = config.noMessages[noCount];
        // Change image based on the specific mood
        if (config.images[noCount + 1]) {
            mainGif.src = config.images[noCount + 1];
        }
    }

    // 2. The Growing "Yes" Button Effect
    noCount++;
    const newSize = 1 + (noCount * 0.4); 
    yesBtn.style.transform = `scale(${newSize})`;
    
    // 3. Move "No" button slightly to make it playful
    const x = Math.random() * 30 - 15;
    const y = Math.random() * 30 - 15;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
