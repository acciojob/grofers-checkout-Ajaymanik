document.getElementById("getTotalPrice").addEventListener("click", getSum);

function getSum() {
    // Select all price elements
    const prices = document.querySelectorAll(".price");
    
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent); // Convert price to number and sum up
    });

    // Remove existing total row if already present
    let totalRow = document.getElementById("total-price-row");
    if (totalRow) {
        totalRow.remove();
    }

    // Create new row
    totalRow = document.createElement("tr");
    totalRow.id = "total-price-row"; // Give it an ID for easy removal in future updates

    let totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.textContent = `Total Price: Rs ${total}`;

    totalRow.appendChild(totalCell);

    // Append to the table
    document.getElementById("total-row").appendChild(totalRow);
}
