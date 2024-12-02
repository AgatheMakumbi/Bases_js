"use strict";
//récupérer les prochains départs d’une station.
//Allez chercher ces données 1. constructeur 2. open 3. send 4. load
/* const request = new XMLHttpRequest();
request.open('GET', 'http://transport.opendata.ch/v1');
request.send();
// station de départ

request.onload =()=>{
    displayDeparture();
    console.log(request.response);
    const data = request.reponse;
}; */

const title= document.querySelector('.title');
title.innerHTML='';
title.insertAdjacentHTML("afterbegin", '<h1>Prochains départs de la station :</h1>');
const inputDestination = document.createElement('input');
inputDestination.type = 'text';
inputDestination.placeholder = 'Entrez le nom de la station';
const submitDestination = document.createElement('button');
submitDestination.textContent = 'Rechercher';
submitDestination.type = 'submit';
title.append(inputDestination,submitDestination);
submitDestination.addEventListener('click', () => {
    findDeparture(`${inputDestination.value}`);
    console.log(inputDestination.value);  
});


const startStation = document.querySelector('.title h1:first-child');
const displayDiparture =(departures)=>{
    departures.forEach(element => {
        const article = document.createElement('article');
        const divTime = document.createElement('div');
        divTime.classList.add('time');
        divTime.textContent =`${ new Date(element.stop.departure).toLocaleTimeString('fr-CH')}`;

        const divCategory = document.createElement('div');
        divCategory.classList.add('category');
        divCategory.dataset.category===`${element.category}`;
        divCategory.textContent = `${element.category}`;

        const divDestination = document.createElement('div');
        divDestination.classList.add('destination');
        divDestination.textContent = `${element.to}`;
        article.append(divTime,divCategory,divDestination);
        document.querySelector('#board').appendChild(article);

    });
};

const findDeparture = (location)=>{
    console.log(location);
    const request = new XMLHttpRequest();
    request.open('GET', `http://transport.opendata.ch/v1/stationboard?station=${location}&limit=10&type=departure`);
    request.send();
    request.addEventListener("load", (e)=> {
        const data = request.response;
        console.log(request.reponse);
        const departures = JSON.parse(data).stationboard;
        console.log(departures);
        displayDiparture(departures);

    });
};



