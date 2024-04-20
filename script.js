let nexPleyer = document.getElementById("pleyertuen");
let scoreX = document.getElementById("scoreX");
let scoreO = document.getElementById("scoreO")
let winerpleyer = document.getElementById("winerPleyer");
const uPadateScore = document.getElementById("scoreaUpdate")

let pleyerXscore = 0;
let pleyerOscore = 0;
let curentPleyer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let draw = "it is Draw"

function gamesPlase(index) {
    if (board[index] === "") {
        board[index] = curentPleyer;
        render();
        if (checkWinner()) {
            winerpleyer.textContent = `Player ${curentPleyer} wins!`;
            winerScore();
            return
        }
        if (board.every(cells => cells !== "")) {
            winerpleyer.textContent = draw;
            return
        }
        curentPleyer = curentPleyer === "O" ? "X" : "O";
        nexPleyer.textContent = `Pleyer ${curentPleyer} Turn`;

    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false

}
function winerScore() {
    if (curentPleyer === "X") {
        scoreX.textContent = ++pleyerXscore;
    } else {
        scoreO.textContent = ++pleyerOscore;
    }

}

function scoreUpdate() {
    scoreX.textContent = pleyerXscore = 0;
    scoreO.textContent = pleyerOscore = 0;
    winerpleyer.textContent = "";
    // resetBoard()

}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    winerpleyer.textContent = "";
    render()
}

function render() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}
