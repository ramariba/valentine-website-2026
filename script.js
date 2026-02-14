// Function to update the title with the name from config
function updateTitle() {
    const titleElement = document.getElementById('valentineTitle');
    if (titleElement && config.valentineName) {
        titleElement.innerText = "Will you be my Valentine, " + config.valentineName + "?";
    }
}

// Initialize page
window.onload = updateTitle;

let noCount = 0;

function handleNoClick() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const mainGif = document.getElementById('mainGif');
    const music = document.getElementById('bgMusic');

    // Play music on interaction
    if (music && music.paused) {
        music.play().catch(err => console.log("Music play blocked by browser"));
    }

    // Change image and text
    if (noCount < config.noMessages.length) {
        noBtn.innerText = config.noMessages[noCount];
        
        // Update image - ensuring we don't use a broken index
        const nextImageIndex = Math.min(noCount + 1, config.images.length - 1);
        mainGif.src = config.images[nextImageIndex];
    }

    // Growth effect for Yes button
    noCount++;
    const newScale = 1 + (noCount * 0.4);
    yesBtn.style.transform = `scale(${newScale})`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
