const circles = Object.freeze([
  { x: 20, y: 10, r: 10, color: "red" },
  { x: 10, y: 10, r: 20, color: "green" },
  { x: 30, y: 25, r: 15, color: "blue" },
  { x: 10, y: 5, r: 5, color: "red" },
]);
circles.forEach(Object.freeze);

// 1.Retourner toutes les aires des cercles
circles.forEach((circle) => {
    const area = Math.PI * circle.r ** 2;
  //air = Math.PI * Math.pow({ r }, 2);
  console.log("Air "+circle.color+": "+area.toFixed(2));
});

//2. Retourner tous les cercles de couleur rouge => filter
console.log(circles.filter( (circles)=> circles.color ==="red"));

// 3. Retourner tous les centres des cercles
console.log(circles.map((circle) => ({ x: circle.x, y: circle.y })));

//4.Retourner tous les cercles en opérant une translation de 10 unités sur l'axe des abscisses
console.log(circles.map((circle) => ({ x: circle.x+10, y: circle.y , r: circle.r, color: circle.color})));