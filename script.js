document.getElementById("create-button").addEventListener("click", function() {
    const selectElement = document.getElementById("cube-select");
    const selectedCube = selectElement.value;
    let scramble = [];

    if (selectedCube === "3x3") {
        const moves = ["R", "L", "U", "D", "F", "B", "R'", "L'", "U'", "D'", "F'", "B'", "R2", "L2", "U2", "D2", "F2", "B2"];
        const scrambleLength = Math.floor(Math.random() * 3) + 20; // 20-22 arasında
        scramble = generateScramble(moves, scrambleLength);
    } else if (selectedCube === "2x2") {
        const moves2x2 = ["R", "R'", "R2", "U", "U'", "U2", "F", "F'", "F2"];
        const scrambleLength2x2 = Math.floor(Math.random() * 2) + 11; // 11-12 arasında
        scramble = generateScramble(moves2x2, scrambleLength2x2);
    } else if (selectedCube === "4x4") {
        const moves4x4 = ["R", "R'", "R2", "Rw", "L", "L'", "L2", "Lw", "U", "U'", "U2", "Uw", "D", "D'", "D2", "Dw", "F", "F'", "F2", "Fw", "B", "B'", "B2", "Bw"];
        const scrambleLength4x4 = Math.floor(Math.random() * 4) + 42; // 42-45 arasında
        scramble = generateScramble(moves4x4, scrambleLength4x4);
    } else if (selectedCube === "5x5") {
        const moves5x5 = ["R", "R'", "R2", "Rw", "L", "L'", "L2", "Lw", "U", "U'", "U2", "Uw", "D", "D'", "D2", "Dw", "F", "F'", "F2", "Fw", "B", "B'", "B2", "Bw"];
        const scrambleLength5x5 = Math.floor(Math.random() * 4) + 60; // 60-63 arasında
        scramble = generateScramble(moves5x5, scrambleLength5x5);
    } else if (selectedCube === "pyraminx") {
        const movesPyraminx = ["R", "R'", "L", "L'", "U", "U'", "B", "B'"];
        const scrambleLengthPyraminx = Math.floor(Math.random() * 3) + 6; // 6-8 arasında
        scramble = generatePyraminxScramble(movesPyraminx, scrambleLengthPyraminx);
    } else if (selectedCube === "skewb") {
        const movesSkewb = ["R", "L", "U", "B", "R'", "L'", "U'", "B'"];
        const scrambleLengthSkewb = Math.floor(Math.random() * 3) + 6; // 6-8 arasında
        scramble = generateSkewbScramble(movesSkewb, scrambleLengthSkewb);
    }

    if (scramble.length > 0) {
        document.getElementById("scramble-display").textContent = scramble.join(" ");
        document.getElementById("copy-button").style.display = "flex";
    } else {
        document.getElementById("scramble-display").textContent = "";
        document.getElementById("copy-button").style.display = "none";
    }
});

function generateScramble(moves, length) {
    let scramble = [];
    let lastMove = "";

    for (let i = 0; i < length; i++) {
        let move;
        do {
            move = moves[Math.floor(Math.random() * moves.length)];
        } while (move[0] === lastMove[0]); // Aynı yüz ardışık olamaz
        scramble.push(move);
        lastMove = move;
    }
    return scramble;
}

function generatePyraminxScramble(moves, length) {
    let scramble = [];
    let lastMove = "";

    // İlk 6-8 büyük harf
    for (let i = 0; i < length; i++) {
        let move;
        do {
            move = moves[Math.floor(Math.random() * moves.length)];
        } while (scramble.length > 0 && move[0] === lastMove[0]); // Aynı yüz ardışık olamaz
        scramble.push(move);
        lastMove = move;
    }

    // Son 1-4 küçük harf
    const smallMoves = ["u", "u'", "l", "l'", "r", "r'", "b", "b'"];
    for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
        let move;
        do {
            move = smallMoves[Math.floor(Math.random() * smallMoves.length)];
        } while (scramble.includes(move)); // Aynı küçük harf eklenemez
        scramble.push(move);
    }

    return scramble;
}

function generateSkewbScramble(moves, length) {
    let scramble = [];
    let lastMove = "";

    // İlk 6-8 büyük harf
    for (let i = 0; i < length; i++) {
        let move;
        do {
            move = moves[Math.floor(Math.random() * moves.length)];
        } while (scramble.length > 0 && move[0] === lastMove[0]); // Aynı yüz ardışık olamaz
        scramble.push(move);
        lastMove = move;
    }

    return scramble;
}

// Kopyala Butonu
document.getElementById("copy-button").addEventListener("click", function() {
    const scrambleText = document.getElementById("scramble-display").textContent;
    navigator.clipboard.writeText(scrambleText).then(() => {
        alert("Scramble kopyalandı: " + scrambleText);
    });
});
