"use strict";
//recuperation des Variables
const input = document.querySelector("input[type='text']");
const textarea =  document.querySelector(".output");
//Interaction entre input et output
function changeInput(currentInput, currentOutput){
    currentInput.addEventListener('input', function (e) {
        currentOutput.value =this.value;
    });
}; 
//Si le texte change dans le champ <input>, le même texte doit s’afficher dans le champ output
changeInput(input, textarea);

//Si le texte change dans le champ output, le même texte doit s’afficher dans le champ <input>
changeInput(textarea,input );
