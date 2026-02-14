let noClickCount = 0;

function handleNoClick() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    
    // Change "No" button text
    if (noClickCount < config.noMessages.length) {
        noBtn.innerText = config.noMessages[noClickCount];
    } else {
        noBtn.innerText = config.noMessages[config.noMessages.length - 1];
    }
    
    // Make "Yes" button grow
    noClickCount++;
    const newSize = 16 + (noClickCount * 20); // Increases size each click
    yesBtn.style.fontSize = `${newSize}px`;
    yesBtn.style.padding = `${newSize/2}px ${newSize}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html"; // Make sure you have a yes_page.html file!
}
