// Create and append the button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", getSum);

function getSum() {
    const prices = document.querySelectorAll(".price"); // Get all price elements
    let total = 0;

    prices.forEach(price => {
        total += Number(price.textContent); // Convert text to number and sum
    });

    // Remove old total row if it exists
    const existingRow = document.getElementById("total-price-row");
    if (existingRow) {
        existingRow.remove();
    }

    // Create new row
    const totalRow = document.createElement("tr");
    totalRow.id = "total-price-row";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: ${total}`;

    totalRow.appendChild(totalCell);

    // Append row to table
    document.querySelector("table").appendChild(totalRow);
}
