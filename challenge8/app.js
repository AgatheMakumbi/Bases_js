// ACCOUNT DATA
const account1 = {
  owner: "Anna Anderson",
  username: "aa",
  movements: [200, 450, -400.5, 3000, -650, -130, 70, 1300],
  pin: 1234,
};

const account2 = {
  owner: "Bijan Bell",
  username: "bb",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 1111,
};

const account3 = {
  owner: "Celeste Carter",
  username: "cc",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 0000,
};

const accounts = [account1, account2, account3];

// ELEMENTS
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");

let currentAccount;

const matchUser = (username, pin) => {
  const matchedAccount = accounts.find((acc) => username === acc.username);
  if (matchedAccount && matchedAccount.pin === pin) {
    return matchedAccount;
  } else {
    throw new Error("Couldn't match user");
  }
};

const message = (text, error) => {
  // error c'est true ou false
  labelWelcome.textContent = text;
  error
    ? (labelWelcome.style.color = "var(--withdrawal)")
    : (labelWelcome.style.color = "var(--deposit)");
};

const displayAccount = (acc) => {
  if (acc) {
    containerApp.style.opacity = "100";
  } else {
    throw new Error("No account to display");
  }
};

const displayBalance = (acc) => {
  const balance = acc.movements.reduce((total, mov) => total + mov, 0);
  labelBalance.textContent = new Intl.NumberFormat("en-CH").format(balance);
};

const displaySumIn = (acc) => {
  const sumPos = acc.movements.filter((movement) => movement > 0);
  const sumIn = sumPos.reduce((total, mov) => total + mov, 0);
  labelSumIn.textContent = new Intl.NumberFormat("en-CH").format(sumIn);
};

const displaySumOut = (acc) => {
  const sumNeg = acc.movements.filter((movement) => movement < 0);
  const sumOut = sumNeg.reduce((total, mov) => total + mov, 0);
  labelSumOut.textContent = new Intl.NumberFormat("en-CH").format(sumOut);
};
const cleanTemplate = () => { 
  if(containerMovements.hasChildNodes()){
    while(containerMovements.hasChildNodes()){
      containerMovements.removeChild(containerMovements.firstChild);
    }
  }
};
displayMouvements = (acc)=>{
  // Effacer les transition template
    cleanTemplate();

  // Afficher les mouvements
  let deposit =0;
  let withdraw =0;
  acc.movements.forEach((mov) => {
    if (mov>0) {
      deposit++
      //div
      const depositElement = document.createElement("div");
      depositElement.classList.add('movements__row');
      //deposit text
      const depositType = document.createElement('div');
      depositType.classList.add('movements__type');
      depositType.classList.add('movements__type--deposit');
      depositType.textContent = `${deposit} DEPOSIT`;
      //mouvement value
      const depositValue = document.createElement('div');
      depositValue.classList.add('movements__value');
      depositValue.textContent = ` CHF ${ new Intl.NumberFormat("en-CH").format(mov)}`;
    
      //regroupement
      depositElement.appendChild(depositType);
      depositElement.appendChild(depositValue);

      //affichage
      containerMovements.appendChild(depositElement);
      console.log(depositElement);  
      
    }else{
      withdraw++
      //div
      const   withdrawElement = document.createElement("div");
      withdrawElement.classList.add('movements__row');
      //deposit text
      const   withdrawType = document.createElement('div');
      withdrawType.classList.add('movements__type');
      withdrawType.classList.add('movements__type--withdrawal');
      withdrawType.textContent = `${withdraw} WITHDRAWAL`;
      //mouvement value
      const   withdrawValue = document.createElement('div');
      withdrawValue.classList.add('movements__value');
      withdrawValue.textContent = ` CHF ${ new Intl.NumberFormat("en-CH").format(mov)}`;
     
    
      //regroupement
      withdrawElement.appendChild( withdrawType);
      withdrawElement.appendChild( withdrawValue);

      //affichage
      containerMovements.appendChild( withdrawElement);
      console.log(withdrawElement);

    };
  });

};

displayAccountInfo = (acc) => {
  //Le montant à disposition dans l’élément labelBalance
  displayBalance(acc);

  // Le total des entrées dans l’élément labelSumIn
  displaySumIn(acc);

  //Le total des dépenses dans l’élément labelSumOut
  displaySumOut(acc);
};

btnLogin.addEventListener("click", function (e) {
  try {
    //s'execute tant que y'a pas d'erreur
    e.preventDefault();
    currentAccount = matchUser(inputLoginUsername.value, +inputLoginPin.value);
    displayAccount(currentAccount);
    message(`Welcome ${currentAccount.owner}`);

    //État général du compte
    displayAccountInfo(currentAccount);
    
    // générez une liste basée sur le tableau movements 
    displayMouvements(currentAccount);
  } catch (err) {
    // attrape message d'erreur
    message(err.message, true);
  }
});
