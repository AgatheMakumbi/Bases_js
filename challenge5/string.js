const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

// 1. Retourner tous les mots contenant au moins un r => filter et includes
const wordsWithR = strings.filter((word) => word.includes("r"));
console.log(wordsWithR);

// 2. Indiquer si tous les mots font 5 lettres
const fiveletters = strings.every((word)=>word.length===5);
console.log(fiveletters);

//3. Retourner un tableau avec un mot de plus en début du tableau
/*La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.*/
const [...addStart ]= strings;
addStart.unshift("film");
console.log(addStart);

// 4. Retourner un tableau avec un mot de plus en fin de tableau
const [...addEnd]= strings;
addEnd.push("movie");
console.log(addEnd);

// 5. Retourner un tableau en remplaçant le mot du milieu par le mot radar (si le tableau à un nombre de mots pair, remplacer le mot qui se situe à l'indice juste avant le milieu)
const [...addInMiddle]= strings;
middle = addInMiddle.length/2;
addInMiddle.splice(middle,1,"radar");
console.log(addInMiddle);

// 6. Retourner la concaténation de tous les mots
const allWords = strings.join("");
console.log(allWords);

// 7. Retourner le mot qui vient en premier selon l'ordre alphabétique (localeCompare peut être utile)
const [...alphabeticOrder] = strings;
alphabeticOrder.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
console.log(alphabeticOrder);

// 8. Indiquer si les chaines du tableau forment un palindrome (si elle sont lues dans l'ordre des indices du tableau). faut mettre to lowercase pour que les majuscule ne fausse pas le calcul
const palindrome = (strings)=> {string.toLowerCase() === string.toLowerCase().split('').reverse().join('')};
 console.log(palindrome(strings));




