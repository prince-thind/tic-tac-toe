import UI from "./UI.js";
import controller from "./controller.js";

const menuModule = (function () {
  UI.AISelectionYes.addEventListener("click", AIFlagSet);
  UI.AISelectionNo.addEventListener("click", AIFlagSet);

  function AIFlagSet(event) {
    let AIFlag = false;
    if (event.target.textContent.toLowerCase() == "yes") {
      AIFlag = true;
    }

    UI.mainBody.classList.toggle("hidden");
    UI.menu.classList.toggle("hidden");

    controller.setGameMode(AIFlag);
  }
  
})();

export default menuModule;
