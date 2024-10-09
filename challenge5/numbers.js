const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);

//1. Afficher tous les nombres dans la console
console.log(numbers);

//2.Retourner un tableau avec les valeurs doublées => map
console.log(numbers.map((x) => x * 2));

//3. Retourner un tableau ne contenant que les valeurs impairs => filter
console.log(numbers.filter((x) => x%2== 0));

//4. Retourner un tableau ne contenant pas le premier élément => array shift
/* The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array 
let firstelement = numbers.shift();
console.log(numbers);
*/
// ou avec restse j'ai deux variables un qui stocke le 1er chiffre et l'autre qui stock le reste du tableau
const [a,...moreNums] = numbers
console.log(moreNums);

// 5. Retourner un tableau ne contenant pas le dernier élément => avec array pop()
/* The pop() method removes the last element from an array and returns that removed element. 
let lastelement = numbers.pop();
console.log(numbers);*/
const [ ...copy] = numbers
console.log(copy[copy.length-1]);


//6. Retourner la somme des nombres => reduce!
console.log(numbers.reduce((accumulator,currentValue)=>accumulator+ currentValue));

//7. Retourner le plus grand nombre => sort
copy.sort((a, b) => a - b);
console.log(copy[copy.length-1]);

// 8. Indiquer si le tableau contient au moins un nombre multiple de 9 => some
console.log(numbers.some((x) => x % 9 == 0));

// 9. Indiquer si le tableau ne contient que des nombres positifs
console.log(numbers.every((x) => x >0));

// 10. Retourner un tableau contenant les nombres pairs dans les premiers indices et les nombres impairs dans les indices restants => filter et spread
const pairs = numbers.filter((x) => x % 2 == 0);
const odds = numbers.filter((x) => x % 2 != 0);
const spread = [...pairs,...odds];
console.log(spread);

// 11. Retourner un tableau ordonné du plus petit au plus grand nombre
copy.sort((a, b) => a - b);
console.log(copy);

// 12. Retourner un tableau ordonné du plus grand au plus petit nombre
copy.sort((a, b) => b - a);
console.log(copy);
