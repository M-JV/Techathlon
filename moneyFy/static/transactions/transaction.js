function addIncomeTransaction() {
    addTransaction(true);
}

function addExpenseTransaction() {
    addTransaction(false);
}

function addTransaction(isIncome) {
    const description = document.getElementById("new-transaction-description").value;
    const amount = parseFloat(document.getElementById("new-transaction-amount").value);

    if (description && !isNaN(amount)) {
        // Create a new transaction item
        const transactionItem = document.createElement("li");
        transactionItem.className = "transaction";

        // Set class based on positive or negative amount
        const amountClass = isIncome ? "positive" : "negative";
        transactionItem.innerHTML = `
            <span class="transaction-description">${description}</span>
            <span class="transaction-amount ${amountClass}">${amount < 0 ? amount.toFixed(2) : (isIncome ? "+" : "-") + amount.toFixed(2)}</span>
        `;

        // Update the transaction lists (income or expense)
        const transactionList = isIncome ? document.getElementById("income-list") : document.getElementById("expense-list");
        transactionList.appendChild(transactionItem);

        // Clear input fields
        document.getElementById("new-transaction-description").value = "";
        document.getElementById("new-transaction-amount").value = "";

        // Calculate and update the total balance
        updateTotalBalance();
    }
}

function updateTotalBalance() {
    // Get all transaction amounts and calculate total balance
    const transactionAmounts = document.querySelectorAll(".transaction-amount");
    let totalBalance = 0;

    for (let i = 0; i < transactionAmounts.length; i++) {
        const transactionAmount = parseFloat(transactionAmounts[i].textContent);
        totalBalance += transactionAmount;
    }

    // Get the total balance element
    const totalBalanceElement = document.getElementById("total-balance");

    // Update the total balance text
    totalBalanceElement.textContent = `Total Balance: ${totalBalance.toFixed(2)}`;

    // Update the total balance text color based on positive or negative balance
    totalBalanceElement.classList.toggle("negative-balance", totalBalance < 0);
}