const user = {
  firstName: "   Bruce",
  lastName: "$pringsteen",
  age: "72 years old",
  isBoss: true,
  nextTourDate: new Date("May 31, 2025 20:00").getTime(),
  albums: [
    {
      title: "Greetings from Asbury Park, NJ",
      year: 1973,
      rymScore: 3.59,
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76,
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98,
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93,
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76,
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87,
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71,
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52,
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97,
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38,
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56,
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42,
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7,
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48,
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95,
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27,
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97,
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27,
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42,
    },
  ],
};

// 1.Affiche text

let firstName = user.firstName.trimStart();
let lastName = user.lastName.replace("$", "S");
let age = user.age.split(" ");
let nextAge = parseInt(age[0]) + 1;
console.log(
  "Cher " + firstName + " " + lastName + ", bienvenue dans votre dashboard."
);
console.log("Vous aurez " + nextAge + " ans l'année prochaine.");
let text = document.getElementById("textholder");
text.textContent = "Next " + firstName + " " + lastName + "'s Tour";

// 2. Countdown
//https://codepen.io/sextoy_fr/pen/KwjgYV

let tdays = document.getElementById("days");
let thours = document.getElementById("hours");
let tminutes = document.getElementById("minutes");
let tseconds = document.getElementById("secs");
let labeldays = document.getElementById("labeldays");
let labelhours = document.getElementById("labelhours");
let labelminutes = document.getElementById("labelminutes");
let labelseconds = document.getElementById("labelsecs");

function caractere(nb) {
  return nb < 10 ? "0" + nb : nb;
}
function genre(nb, label) {
  return nb > 1 ? label + "s" : label;
}

function Countdown() {
  const dateNow = new Date();
  const dateTour = user.nextTourDate;
  let timeLeftsec = (dateTour - dateNow) / 1000;
  if (timeLeftsec > 0) {
    let secsInaDay = 24 * 3600;
    let days = Math.floor(timeLeftsec / secsInaDay);
    let hours = Math.floor((timeLeftsec - days * secsInaDay) / 3600);
    let minutes = Math.floor(
      (timeLeftsec - (days * secsInaDay + hours * 3600)) / 60
    );
    let seconds = Math.floor(
      timeLeftsec - (days * secsInaDay + hours * 3600 + minutes * 60)
    );

    tdays.textContent = caractere(days);
    thours.textContent = caractere(hours);
    tminutes.textContent = caractere(minutes);
    tseconds.textContent = caractere(seconds);

    labeldays.textContent = genre(days, "jour");
    labelhours.textContent = genre(hours, "heure");
    labelminutes.textContent = genre(minutes, "minute");
    labelseconds.textContent = genre(seconds, "seconde");
    //console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
  }

  refreshCountdown = setTimeout("Countdown();", 1000);
}
Countdown();

//3. Album
//on click sur la décénie et ça affiche tout les albums de la décénie dans l'ordre du meilleur noté au pire

function showAlbums20() {
  console.log(showAlbums(2020, 2030));
}
function showAlbums10() {
  console.log(showAlbums(2010, 2020));
}
function showAlbums00() {
  console.log(showAlbums(2000, 2010));
}
function showAlbums90() {
  console.log(showAlbums(1990, 2000));
}
function showAlbums80() {
  console.log(showAlbums(1980, 1990));
}
function showAlbums70() {
  console.log(showAlbums(1970, 1980));
}

function showAlbums(startDecade, EndDecade) {
  const albumsArray = user.albums;
  let albumsOfYear = [];

  for (let i = 0; i <= albumsArray.length - 1; i++) {
    if (
      albumsArray[i]["year"] >= startDecade &&
      albumsArray[i]["year"] < EndDecade
    ) {
      //console.log(albumsArray[i]);
      albumsOfYear.push(albumsArray[i]);
    }
  }

  albumsOfYear = albumsOfYear.sort((a, b) => b.rymScore - a.rymScore);

  displayAlbumbsWithRatings(albumsOfYear);
  return albumsOfYear;
}

function displayAlbumbsWithRatings(albums) {
  const parentDiv = document.getElementById("parent");

  let index = 1;
  if (parentDiv.hasChildNodes()) {
    while (parentDiv.firstChild) {
      parentDiv.removeChild(parentDiv.firstChild);
    }
   
  }
  albums.forEach((album) => {
    let div;
    
    
    div = parentDiv.appendChild(document.createElement("div"));
    
    const currentIndexClass = `div${index++}`;

    div.classList.contains(currentIndexClass)? div.classList.remove(currentIndexClass): div.classList.add(currentIndexClass);
    div.classList.contains(("album"))? div.classList.remove("album"): div.classList.add("album");

    
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
       
    let title = div.appendChild(document.createElement("p"));
    title.textContent = album.title;
    let year = div.appendChild(document.createElement("p"));
    year.textContent = album.year;
    let rating = div.appendChild(document.createElement("p"));
    rating.textContent = "score: "+album.rymScore;

  });
  
  
  
}
