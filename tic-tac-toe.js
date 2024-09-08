let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#rbtn");
let newgame = document.querySelector("#newgame");
let msgho = document.querySelector("#msgho");
let themeToggle = document.querySelector("#theme-toggle");
let play = false;
let moves = 0; // Track the number of moves
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const restart = () => {
    msgho.classList.add("hide");
    play = false;
    moves = 0; // Reset moves
    for (let i of btn) {
        i.disabled = false;
        i.innerText = "";
    }
};

btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.innerText) {
            box.innerText = play ? "O" : "X";
            play = !play;
            box.disabled = true;
            moves++;
            checkwin();
        }
    });
});

const disablebox = () => {
    for (let i of btn) {
        i.disabled = true;
    }
};

function showwin(winner) {
    msgho.innerText = `Congratulations! Winner is ${winner}`;
    msgho.classList.remove("hide");
    disablebox();
    setTimeout(restart, 2000); // Automatically restart after 2 seconds
}

function checkwin() {
    for (let i of win) {
        let v1 = btn[i[0]].innerText;
        let v2 = btn[i[1]].innerText;
        let v3 = btn[i[2]].innerText;
        if (v1 && v2 && v3 && v1 === v2 && v2 === v3) {
            showwin(v1);
            return;
        }
    }

    if (moves === 9) {
        msgho.innerText = "It's a Draw!";
        msgho.classList.remove("hide");
        setTimeout(restart, 2000); // Automatically restart after 2 seconds
    }
}

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.querySelector("#container").classList.toggle("dark");
    btn.forEach((box) => box.classList.toggle("dark"));
    themeToggle.classList.toggle("dark");
    msgho.classList.toggle("dark");

    if (themeToggle.classList.contains("dark")) {
        themeToggle.innerText = "Switch to Light Mode";
    } else {
        themeToggle.innerText = "Switch to Dark Mode";
    }
});

newgame.addEventListener("click", restart);
reset.addEventListener("click", restart);
