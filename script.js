document.getElementById("create-button").addEventListener("click", function() {
    const selectElement = document.getElementById("cube-select");
    const selectedCube = selectElement.value;
    let scramble = [];

    if (selectedCube === "3x3") {
        const moves = ["R", "L", "U", "D", "F", "B", "R'", "L'", "U'", "D'", "F'", "B'", "R2", "L2", "U2", "D2", "F2", "B2"];
        const scrambleLength = Math.floor(Math.random() * 3) + 20; // 20-22 arasında
        scramble = generateScramble(moves, scrambleLength);
    } else if (selectedCube === "2x2") {
        const moves2x2 = ["R", "R'", "R2", "U", "U'", "U2", "L", "L'", "L2", "F", "F'", "F2"];
        const scrambleLength2x2 = Math.floor(Math.random() * 2) + 11; // 11-12 arasında
        scramble = generateScramble(moves2x2, scrambleLength2x2);
    } else if (selectedCube === "4x4") {
        const moves4x4 = [
            "R", "L", "U", "D", "F", "B", "R'", "L'", "U'", "D'", "F'", "B'", 
            "R2", "L2", "U2", "D2", "F2", "B2", 
            "Rw", "Lw", "Uw", "Dw", "Fw", "Bw", 
            "Rw'", "Lw'", "Uw'", "Dw'", "Fw'", "Bw'", 
            "Rw2", "Lw2", "Uw2", "Dw2", "Fw2", "Bw2"
        ];
        const scrambleLength4x4 = Math.floor(Math.random() * 4) + 42; // 42-45 arasında
        scramble = generateScramble(moves4x4, scrambleLength4x4);
    }

    document.getElementById("scramble-display").textContent = scramble.join(" ");
});

function generateScramble(moves, length) {
    let scramble = [];
    let lastMove = "";

    for (let i = 0; i < length; i++) {
        let move;
        do {
            move = moves[Math.floor(Math.random() * moves.length)];
        } while (
            move[0] === lastMove[0] // Aynı yüz (örneğin, R ve R') ardışık olamaz
        );
        scramble.push(move);
        lastMove = move;
    }
    return scramble;
}
