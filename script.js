let screen = document.querySelector(".screen");
let currentSize = 100;

function createGrid(val) {
  if (val === null) return;

  currentSize = val;
  screen.replaceChildren();
  let percentage = 100/val + '%';

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
createGrid(currentSize);

const reset = document.querySelector('#reset');
reset.addEventListener('click',  () => createGrid(currentSize));

const change = document.querySelector('#change');
change.addEventListener('click', ()=> {
  while(true) {
    let newGridSize = prompt("Enter new grid size (max 100)");
    if (isNaN(newGridSize)) {
      alert('Only numbers are valid inputs');
      continue;
    }
    if (newGridSize > 100) {
      alert('Hey! Max 100!');
      continue
    }

    createGrid(newGridSize);
    return;
  }
});