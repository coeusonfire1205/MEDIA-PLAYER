// Get all audio players
const players = document.querySelectorAll(".player");

// Play only one audio at a time
players.forEach((currentPlayer, index) => {

    // When play is clicked
    currentPlayer.addEventListener("play", () => {
        currentPlayer.muted = false;

        players.forEach(otherPlayer => {
            if (otherPlayer !== currentPlayer) {
                otherPlayer.pause();
                otherPlayer.currentTime = 0;
            }
        });
    });

    // Auto play next audio when current ends
    currentPlayer.addEventListener("ended", () => {
        const nextIndex = index + 1;

        if (players[nextIndex]) {
            players[nextIndex].play();
        }
    });
});
