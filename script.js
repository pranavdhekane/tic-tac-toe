let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let main = document.querySelector("main");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        
        checkWinner();
        checkDraw();
    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log(`Winner is ${pos1val}`);
                showWinner(pos1val);
            }
        }

    }
}

const showWinner = (winner) => {
    main.style.display = "none";
    msgContainer.style.display = "flex";
    msg.innerText = `Congratulations, Winner is '${winner}'`;
}



const checkDraw = () => {
    let count = 0;
    for (let box of boxes) {
        if (box.innerText === 'O' || box.innerText === 'X') {
            count++;
        }
    }
    if (count === 9) {
        Draw();
    }
}

const Draw = () => {
    main.style.display = "none";
    msgContainer.style.display = "flex";
    msg.innerText = `It's a Draw`;
}

const resetGame = () => {
    main.style.display = "block";
    msgContainer.style.display = "none";
    turn0 = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
