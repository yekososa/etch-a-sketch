const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("flexcontainer")

    for (let j = 0; j < 16; j++) {
        let col = document.createElement("div");
        col.textContent = "cell";
        row.appendChild(col);
    }
    container.appendChild(row);
}