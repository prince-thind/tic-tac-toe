import getWinner from "./getWinner";
import main from "./main";
import { setAI, turn, cells, getActivePlayerSymbol, checkFull } from "./state";

const AISelectionYes = document.querySelector("#button-accept");
const AISelectionNo = document.querySelector("#button-cancel");
const menu = document.querySelector("#menu");

const mainBody = document.querySelector("#main");
const statusBar = document.querySelector("#status-bar");
const mainBoard = document.querySelector("#main-board");

const resetButton = document.querySelector("#reset");

AISelectionYes.addEventListener("click", handleAIButtonClick);
AISelectionNo.addEventListener("click", handleAIButtonClick);
resetButton.addEventListener("click", handleResetButtonClick);
mainBoard.addEventListener("click", main);

function display() {
  mainBoard.innerHTML = "";
  updateStatusBar();
  let i = 0;
  for (const cell of cells) {
    const cellDiv = document.createElement("div");
    cellDiv.className = "cell";
    cellDiv.setAttribute("data-index", i++);
    cellDiv.textContent = cell;
    mainBoard.append(cellDiv);
  }

  const isFull = checkFull();
  if (isFull) {
    displayTie();
  }

  const winner = getWinner();
  if (winner) {
    displayWinner(winner);
    return;
  }
}
function displayTie() {
  statusBar.textContent = "It's a tie!";
}
function displayWinner(winner) {
  statusBar.textContent = winner + " has won!";
}

function updateStatusBar() {
  statusBar.textContent = `${turn}'s (${getActivePlayerSymbol()}) Turn`;
}

function handleAIButtonClick(e) {
  const input = e.target.getAttribute("data-AI") == "true";
  setAI(input);
  toggleMenu();
}

function toggleMenu() {
  menu.classList.toggle("hidden");
  mainBody.classList.toggle("hidden");
}

function handleResetButtonClick() {
  toggleMenu();
  for (let i = 0; i < cells.length; i++) {
    cells[i] = null;
  }
  display();
}

export { display };
