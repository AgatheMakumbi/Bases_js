"use strict";
// Le système doit pouvoir créer des sondages à partir d’objets prenant la forme ci-dessous, c’est à dire un objet avec une propriété question et une propriété options contenant un tableau avec les différentes réponses possibles.



// Créer des objects pour les sondages
const surveySubject = (question, tabOptions) => {
  const surveyTopic = {
    question: question,
    options: tabOptions,
  };

  return surveyTopic;
};



const capital = surveySubject("Quelle est la capital de la France", [
  "paris",
  "milan",
  "Geneve",
  "Londres",
]);

//Créer des sondages à partir d'un object
const newSurvey = (surveyTopic) => {
  let i = 1;
  console.log(`Question: ${surveyTopic.question}`);
  surveyTopic.options.forEach((option) =>
    console.log(`Option ${i++}: ${option}`)
  );

  // initialiser le map ici pour qu'il soit crée qu'une seule fois à la creation du sondage
  const results = new Map();
  // initialiser les values à 0
  surveyTopic.options.forEach((option) => {
    results.set(option, 0);
  });

  const vote = (optionNumber) => {
    //petit controle de l'input 'optionNumber'
    if (typeof optionNumber !== 'number' || optionNumber < 1 || optionNumber > surveyTopic.options.length) {
      console.log("Option invalide");
      return results;
    }

    const option = surveyTopic.options[optionNumber - 1];
    // Incrémenter la valeur actuelle de l'option
    const currentVotes = results.get(option);
    results.set(option, currentVotes + 1);

    return results;
  };

  return vote; // sans les parenthèses
};

//console.log(newSurvey(capital));
const pollCapital = newSurvey(capital);
console.log(pollCapital(1));
console.log(pollCapital(2));
console.log(pollCapital(2)); // yesss ça s'incrémenteeee

const beauGoss = surveySubject('Qui est le plus beau ?',['Sam','Robin','Loic',' les Thibauds','Vincent','Michael','Theo']);
const pollBg= newSurvey(beauGoss);
console.log(pollBg(1));
console.log(pollBg(1));
console.log(pollBg(1));
console.log(pollBg(1));
console.log(pollBg(1));
console.log(pollBg(1));

