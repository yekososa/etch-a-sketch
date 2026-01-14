const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("flexcontainer")

    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.textContent = "cell";

        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "red";
        })

        cell.addEventListener("mouseleave", () => {
            cell.style.backgroundColor = "purple";
        })

        row.appendChild(cell);
    }
    container.appendChild(row);
}

