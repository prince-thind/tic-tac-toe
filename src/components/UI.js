import { setAI } from "./state";

const AISelectionYes = document.querySelector("#button-accept");
const AISelectionNo = document.querySelector("#button-cancel");
AISelectionYes.addEventListener("click", handleAIButtonClick);
AISelectionNo.addEventListener("click", handleAIButtonClick);

const statusBar = document.querySelector("#status-bar");

const resetButton = document.querySelector("#reset");

const mainBoard = document.querySelector("#main-board");
const mainCells = [...document.querySelectorAll(".cell")];

const mainBody = document.querySelector("#main");

const menu = document.querySelector("#menu");

function display() {
  updateStatusBar();
}

function updateStatusBar() {}

function handleAIButtonClick(e) {
  const input = Boolean(e.target.getAttribute("data-AI"));
  setAI(input);
  toggleMenu();
}

function toggleMenu() {
  menu.classList.toggle("hidden");
  mainBody.classList.toggle("hidden");
}

export { display };
