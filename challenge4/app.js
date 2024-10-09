//Exercice 1

const addTwo = (a) => {
  return a + 2;
};

console.log(addTwo(3));
console.log(addTwo(10));

//Exercice 2 
// tu peux mettre sur une ligne et enlever les parenthèse et le 'return'
const pluralize = (chaine) => chaine + "s";
const animals = ['cat', 'dog', 'tie', 'caw', 'fly'];

animals.forEach((element)=>{
  // pour afficher dans la console
  console.log(pluralize(element));
});

console.log(pluralize("cat"));
console.log(pluralize("dog"));  


//Exercice 3
const map = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    array.splice(i, 1, callback(array[i])); // starting from the current index it removes 1 item and adds/replace with what the call back returns
  }
  return array;
};

console.log(map([1, 2, 3], addTwo));

//Exercice 4 pas compris ce qu'il faut faire

let alphabet = "";
const letters = ["a", "b", "c", "d"];

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

forEach(letters, function(char) { // on créer la fonction call back directement dans les parametres
    alphabet += char;
});

console.log(alphabet);

//Exercice 5 => corrigé avec le proffffff
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
function reduce(array,callback,init){
      // d'abord on fait le check pour savoir si y'a une valeure initiale
      let accumulator;
      if (init) {
        accumulator = init;
      }else{
        accumulator = array[0];
      }
      // ensuite on boucle sur chaque élément du tableau et on ajoute le résultat du callbakc dans l'accumulateur
      array.forEach(element=>{
        accumulator = callback(accumulator,element) // cette fonction callback doit être définie dans l'appel de la fonction reduce
      });

      return accumulator;
    ;
};


console.log(reduce(nums, add, 0))
console.log(reduce([4,1,3], (a, b) => a + b, 0))
