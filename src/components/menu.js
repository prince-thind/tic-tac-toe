import UI from "./UI.js";
import controller from "./controller.js";

const menuModule = (function () {
    UI.AISelectionYes.addEventListener("click", () => {
      UI.mainBody.classList.toggle("hidden");
      UI.menu.classList.toggle("hidden");
      controller.setAI(true);
    });
    UI.AISelectionNo.addEventListener("click", () => {
      UI.mainBody.classList.toggle("hidden");
      UI.menu.classList.toggle("hidden");
      controller.setAI(false);
    });
  })();

  export default menuModule;