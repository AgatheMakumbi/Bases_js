"use strict";
//The constructor initializes an XMLHttpRequest. It must be called before any other method calls.
const request = new XMLHttpRequest();
//The open method initializes a request. It must be called before send().
request.open('GET', 'https://randomuser.me/api/');
//The send method sends the request to the server. It must be called after open().
request.send();

//Fired when an XMLHttpRequest transaction completes successfully.
request.addEventListener("load", (e)=> {

    //Returns a string that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.
    const data = JSON.parse(request.response);
    console.log(data);
    renderUser(data);
    });

    const renderUser = (data)=> {
        data.results.forEach((element) => {
            const name = element.name.first;
            const surname = element.name.last;
            const cell = element.cell;
            document.querySelector('#first').textContent = `name : ${name}`;
            document.querySelector('#last').textContent = `name : ${surname}`;;
            document.querySelector('#cell').textContent = `name : ${cell}`;;
            console.log(cell);
            
        });
        
        
    }