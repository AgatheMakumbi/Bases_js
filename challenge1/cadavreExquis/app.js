
function activejeu() {
    var sujet = prompt("Choisis le sujet de la phrase");
    var sujetAdjectif = prompt("Choisis un adjectif");
    var verbe = prompt("Choisis un verbe conjugé");
    var complement = prompt("Choisis un complement de phrase");
    var adjectifComplement = prompt("choisis un adjectif");
    var phrase = sujet + " " + sujetAdjectif + " " + verbe + " " + adjectifComplement + " " + complement ;
    alert(phrase);
};
console.log(activejeu);