// **À IMPLEMENTER**
//Permet de déterminer si un utilisateur est authentifié ou non.
const isAuthenticated = () => {
//check s'il a un token ou si token est null
return true;
};

// Affiche un message à l'utilisateur.
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message; // Sélectionne l'élément de message et met à jour son texte.
};

// Gère l'affichage des éléments de l'interface en fonction de l'état d'authentification.
const handleInterfaceAuth = () => {
  const auth = isAuthenticated(); // Vérifie si l'utilisateur est authentifié.
  document
    .querySelectorAll(".requires-auth")
    .forEach((el) => el.classList.toggle("hidden", !auth)); // Cache ou montre les éléments nécessitant une authentification.
  document
    .querySelectorAll(".requires-unauth")
    .forEach((el) => el.classList.toggle("hidden", auth)); // Cache ou montre les éléments ne nécessitant pas d'authentification.
};

// Basculer entre les formulaires de connexion et d'inscription.
const toggleForm = (formName) => {
  document
    .querySelectorAll("form")
    .forEach((form) => form.classList.remove("active")); // Désactive tous les formulaires.
  document.querySelector(`form[name='${formName}']`).classList.add("active"); // Active le formulaire spécifié.

  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active")); // Désactive tous les onglets.
  document.querySelector(`.tab#${formName}`).classList.add("active"); // Active l'onglet spécifié.
};

// **À COMPLETER**
// Initialisation de la page
const initEventListeners = () => {
  document.querySelector(".tab-container").addEventListener("click", (e) => {
    // Gère les clics sur les onglets.
    if (e.target.classList.contains("tab")) {
      toggleForm(e.target.id); // Bascule le formulaire actif en fonction de l'onglet cliqué.
    }
    //Event Listener attendant la soumission du formulaire
    const signUpForm = document.querySelector("form[name='signup']");
    signUpForm.addEventListener("submit", (e)=> {
      //éviter le rechargement de la page 
      e.preventDefault()

      // récupérer le FormData 
      const formData = new FormData(signUpForm);

      /* enyover une requette POST pour créer un utilisateur, précisant les options:
      method: “POST”
      headers: { "Content-Type": "application/json" }
      body: { “email”: “something@something.ch”, “password”: “password” }
      */ 
      const createAccountRequest = async () {
        try {
        let res = await fetch("https://progweb-todo-api.onrender.com/users", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          }});
        console.log(res);
        } catch (e) {
          displayMessage(`${e.message}`);
        }
      };
    }).reset();
  });
};

// **À COMPLETER**
const pageLoad = () => {
  handleInterfaceAuth();
  initEventListeners();
};

pageLoad();
