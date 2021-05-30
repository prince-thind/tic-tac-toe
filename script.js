let debug = (function () {
  function fill() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          arr.push("*");
        }
      }
  }


  return {fill};
})();

let board = (function () {
  let arr = [];

  let display=()=>{

  }

  return{arr}
})();

let UI=(function(){
    let activePlayer=document.querySelector(".active-player");
    let result=document.querySelector(".result");
    let player1Input=document.querySelector("#player1");
    let player2Input=document.querySelector("#player2");
    let saveButton=document.querySelector(".save");
    let resetButton=document.querySelector(".reset");
    let mainBoard=document.querySelector(".main-player");

    return{activePlayer,result,player1Input,player2Input,saveButton,resetButton,mainBoard}
})();