// 1. Initialize the Name
document.getElementById('valentineTitle').innerText = "Will you be my Valentine, " + config.valentineName + "?";

let noCount = 0;
const music = document.getElementById('bgMusic');

function handleNoClick() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const mainGif = document.getElementById('mainGif');

    // Start music on first interaction if it's not playing
    if (music.paused) {
        music.play();
    }

    // 2. Change Text and Image based on click count
    if (noCount < config.noMessages.length) {
        noBtn.innerText = config.noMessages[noCount];
        
        // Update the image to match the mood
        // We use noCount + 1 to move to the next image in your config list
        if (config.images[noCount + 1]) {
            mainGif.src = config.images[noCount + 1];
        }
    }

    // 3. Make the "Yes" button grow (Reference Video Effect)
    noCount++;
    const newSize = 1 + (noCount * 0.4); 
    yesBtn.style.transform = `scale(${newSize})`;
    
    // Move No button slightly to make it harder to catch
    const x = Math.random() * 30 - 15;
    const y = Math.random() * 30 - 15;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
