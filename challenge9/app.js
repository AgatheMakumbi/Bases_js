const container = document.querySelector("main");

const circle = `<svg viewBox="0 0 100 100" data-shape="circle">
<circle cx="50" cy="50" r="50"/>
</svg>`;

const triangle = `<svg viewBox="0 0 100 100" data-shape="triangle">
<polygon points="0,100 100,100 50,0"></polygon>
</svg>`;

const square = `<svg viewBox="0 0 100 100" data-shape="square">
<polygon points="0,0 0,100 100,100, 100,0"></polygon>
</svg>`;

const makeGrid = (r, c) => {
  container.style.setProperty("--grid-rows", r);
  container.style.setProperty("--grid-cols", c);
  for (c = 0; c < r * r; c++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
};

const addShapes = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const shape = Math.floor(Math.random() * 3); // pour les mettre au random

    switch (shape) {
      case 0:
        container.children[i].insertAdjacentHTML("afterbegin", circle);
        break;
      case 1:
        container.children[i].insertAdjacentHTML("afterbegin", triangle);
        break;
      case 2:
        container.children[i].insertAdjacentHTML("afterbegin", square);
        break;
    }
  }
};

const initGrid = (gridSize) => {
  makeGrid(gridSize, gridSize);
  addShapes(gridSize);
};

initGrid(Math.floor(Math.random() * 24));

//changement de forme au mouseover 
document.body.addEventListener("mouseover", (e)=>{
  e.preventDefault();
  //console.log(e.target.lastChild.dataset.shape);
  const currentShape = e.target.lastChild.dataset.shape;

  switch (currentShape) {
    //Si c’est un cercle, transformez-la en carré
    case "circle":
      e.target.innerHTML = " ";
      e.target.insertAdjacentHTML("afterbegin", square);
      break;

    //Si c’est un triangle, transformez-la en cercle
    case "triangle":
      e.target.innerHTML = " ";
      e.target.insertAdjacentHTML("afterbegin", circle);
      break;
    //Si c’est un carré, transformez-la en triangle.
    case "square":
      e.target.innerHTML = " ";
      e.target.insertAdjacentHTML("afterbegin", triangle);
      e.target.lastChild.style.fill = '#60b347';
      break;
  
  }
	
})

