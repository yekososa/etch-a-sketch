const container = document.querySelector(".container");

function createGrid(val) {
  const container = document.querySelector(".container");
  container.replaceChildren();

  for (let i = 0; i < val; i++) {
    let row = document.createElement("div");
    row.classList.add("flexcontainer");

    for (let j = 0; j < val; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "purple";
      });

    //   cell.addEventListener("mouseleave", () => {
    //     cell.style.backgroundColor = "white";
    //   });

      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const val1 = prompt("Enter number of squares per side for new grid");

  if (val1 > 100) {
    alert("Entered value must be less than or equal to 100");
  } else {
    createGrid(val1);
  }
});

createGrid(16);
