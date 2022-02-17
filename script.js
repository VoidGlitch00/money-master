/* main function */
function moneyHoney(inputId) {
    /* handling all input events */
    const incomeInput = document.getElementById("income-input");
    const foodExpenseInput = document.getElementById("food-expense-input");
    const rentExpenseInput = document.getElementById("rent-expense-input");
    const clothesExpenseInput = document.getElementById("clothes-expense-input");
    const showTotalExpense = document.getElementById("total-expense");
    const showFinalBalance = document.getElementById("final-balance");
    const percentageDigit = document.getElementById("percent-digit");
    const remainingBalance = document.getElementById("remaining-balance");
    /* taking inputs as value */
    const incomeAmount = parseInt(incomeInput.value);
    const foodAmount = parseInt(foodExpenseInput.value);
    const rentAmount = parseInt(rentExpenseInput.value);
    const clothesAmount = parseInt(clothesExpenseInput.value);
    /* Calculation */
    const totalExpense = foodAmount + rentAmount + clothesAmount;
    const finalBalance = incomeAmount - totalExpense;
    /* Percentage Calculation */
    const percentValue = parseInt(percentageDigit.value);
    const savingAmount = parseInt(incomeAmount * (percentValue / 100));
    const savings = document.getElementById("saving-amount");
    const leftBalance = finalBalance - savingAmount;
    if (inputId == "incomeAndExpense") {
        /* showing balance */
        showTotalExpense.innerText = totalExpense;
        showFinalBalance.innerText = finalBalance;
    }
    else if (inputId == "percentage") {
        /* showing percentage */
        savings.innerText = savingAmount;
        remainingBalance.innerText = leftBalance;
    }
}

/* Income & Expenses */
document.getElementById("final-calculation").addEventListener("click", function () {
    moneyHoney("incomeAndExpense");
})

/* Percentage Calculation */
document.getElementById("percentage-calculation").addEventListener("click", function () {
    moneyHoney("percentage");
})