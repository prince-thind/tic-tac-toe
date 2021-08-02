import UI from './UI';
import controller from './controller';

(() => {
  UI.AISelectionYes.addEventListener('click', AIFlagSet);
  UI.AISelectionNo.addEventListener('click', AIFlagSet);

  function AIFlagSet(event) {
    let AIFlag = false;
    if (event.target === UI.AISelectionYes) {
      AIFlag = true;
    }

    UI.mainBody.classList.toggle('hidden');
    UI.menu.classList.toggle('hidden');

    controller.setGameMode(AIFlag);
  }
})();
