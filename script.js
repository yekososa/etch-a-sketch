// const container = document.querySelector(".container");

// function createGrid(val) {
//   const container = document.querySelector(".container");
//   container.replaceChildren();

//   for (let i = 0; i < val; i++) {
//     let row = document.createElement("div");
//     row.classList.add("flexcontainer");

//     for (let j = 0; j < val; j++) {
//       let cell = document.createElement("div");
//       cell.classList.add("cell");

//       cell.addEventListener("mouseenter", () => {
//         let opacity = cell.style.opacity;
//         cell.style.opacity = Math.min(1, Number(opacity) + 0.1);
//       });

//       row.appendChild(cell);
//     }
//     container.appendChild(row);
//   }
// }
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const val1 = prompt("Enter number of squares per side for new grid");

//   if (val1 > 100) {
//     alert("Entered value must be less than or equal to 100");
//   } else {
//     createGrid(val1);
//   }
// });


// function generateRandomRgbColor() {
//   let r = Math.floor(Math.random() * 256); 
//   let g = Math.floor(Math.random() * 256); 
//   let b = Math.floor(Math.random() * 256); 
  
//   return "rgb(" + r + "," + g + "," + b + ")";
// }

// createGrid(16);


let screen = document.querySelector(".screen");

function createGrid(val) {
  screen.replaceChildren();
  let percentage = 100/16 + '%';

  for (let i = 0; i < val*val; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.flexGrow = 0;
      cell.style.flexShrink = 0;
      cell.style.flexBasis = percentage;

      cell.addEventListener("mouseenter", () => {
        let opacity = cell.style.opacity;
        cell.style.opacity = Math.min(1, Number(opacity) + 0.1);
      });

      screen.appendChild(cell);
    }
}

createGrid(69);