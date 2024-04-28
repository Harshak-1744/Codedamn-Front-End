// Objective-2: Develop a simple JavaScript console application to manage a personal budget.

let transactions = [];

function addTransaction(type, description, amount) {
    transactions.push({ type, description, amount });
    displayTransactions();
}

function removeTransaction(index) {
    if (index >= 0 && index < transactions.length) {
        transactions.splice(index, 1);
    } else {
        console.log("Invalid index. No transaction removed.");
    }
    displayTransactions();
}

function displayTransactions() {
    console.log("All Transactions:");
    transactions.forEach((transaction, index) => {
        console.log(`${index + 1}: ${transaction.type} - ${transaction.description} - ₹${transaction.amount}`);
    });

    let totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, curr) => sum + curr.amount, 0);
    let totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, curr) => sum + curr.amount, 0);
    let balance = totalIncome - totalExpense;

    console.log(`Total Income: ₹${totalIncome}, Total Expense: ₹${totalExpense}, Balance: ₹${balance}`);
}

addTransaction('income', 'Salary', 50000);
addTransaction('expense', 'Rent', 15000);
removeTransaction(1);
