"use strict";
//recuperation des Variables
const input = document.querySelector("input[type='text']");
const textarea =  document.querySelector(".output");
const select = document.querySelector("select[name='typeface']");
const size = document.querySelector("input[name='size']");
const sizelabel = document.querySelector('.sizelabel');
const color = document.querySelector(".colors");
const weight = document.querySelector("input[name='weight']");
const weightlabel = document.querySelector('.weightLabel');
const leading = document.querySelector("input[name='leading']");
const leadinglabel = document.querySelector('.leadinglabel');
const italic = document.querySelector("input[name='italic']");
const saveButton = document.querySelector('.save');
const settingContainer = document.querySelector('.settings-container');
let settings = [];
let setting = {};
const truncateString = (string = "", maxLength = 50) => string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

//Interaction entre input et output
function changeInput(currentInput, currentOutput){
    currentInput.addEventListener('input', function (e) {
        currentOutput.value =this.value;
        //object['new_property'] = new_value;
        setting['text'] = this.value;
        
    });
}; 
//Si le texte change dans le champ <input>, le même texte doit s’afficher dans le champ output
changeInput(input, textarea);

//Si le texte change dans le champ output, le même texte doit s’afficher dans le champ <input>
changeInput(textarea,input );

//Changement de typo
select.addEventListener('change', function (e) {
    textarea.style.fontFamily = this.value;
    setting['typeface'] = this.value;
});

//Changement de taille
size.addEventListener('change',function (e) {
    textarea.style.fontSize = this.value + 'px';
    sizelabel.textContent = this.value + 'px';
    setting['size'] = this.value;
});

// de graisse 
weight.addEventListener('change',function (e) {
    textarea.style.fontWeight = this.value;
    weightlabel.textContent = this.value;
    setting['weight'] = this.value;
} );
//et d’interlignage
leading.addEventListener('change',function (e) {
    textarea.style.lineHeight = this.value;
    leadinglabel.textContent = this.value;
    setting['leading'] = this.value;
} );

// Texte italique
italic.addEventListener('change', function (e) {
    if (this.checked) {
        textarea.style.fontStyle = 'italic';
        setting['italic'] = true;
    }
    
});

//Couleur de texte et de background
color.addEventListener('click',(e)=>{
    document.body.style.backgroundColor = e.target.style.backgroundColor;
    textarea.style.color = e.target.style.color;
    setting['bgColor'] = e.target.style.backgroundColor;
    setting['color'] = e.target.style.color;
	});

// Sauvegarde de réglages dans un objet 

function saveSettings(){
    settings.push(setting);
    console.log(setting);
    console.log(settings);
    return setting;
}
//Pour chaque réglage sauvegardé, un élément <div> avec la classe “setting” doit apparaitre comme enfant de l’élément avec la classe “settings-container”. 
const showSetting = (currentSetting) =>{
    const settingElement = document.createElement("div");
    settingElement.classList.add('setting');
    settingElement.style.backgroundColor = currentSetting.bgColor;
    settingElement.style.color = currentSetting.color;
    settingElement.style.fontFamily = currentSetting.typeface;
    settingElement.style.fontStyle = currentSetting.italic ? 'italic' : 'normal';
    settingElement.style.fontWeight = currentSetting.weight;
    settingElement.textContent = truncateString(currentSetting.text, 20);
    settingContainer.appendChild(settingElement);
    console.log(settingElement);
    return currentSetting;
};
saveButton.addEventListener('click', (e)=>{
    
    //creation d'un élément réglage
    showSetting(saveSettings());

}); 

settingContainer.addEventListener('click', (e)=>{
    if(e.target.classList.contains('setting')){
        console.log(e);
        //.target.nodeType
    }
})



