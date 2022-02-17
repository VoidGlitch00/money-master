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
    const savingAmount = parseFloat(incomeAmount * (percentValue / 100)).toFixed(2);
    const savings = document.getElementById("saving-amount");
    const leftBalance = (finalBalance - savingAmount).toFixed(2);
    if (incomeAmount < 0 || percentageDigit < 0 || foodAmount < 0 || rentAmount < 0 || clothesAmount < 0) {
        alert("Insert a positive number or go to Mars!");
    }
    else if (finalBalance > incomeAmount || finalBalance < 0) {
        alert("You can't spend money more than you income and be a wise man!");
    }
    else {
        if (inputId == "incomeAndExpense") {
            /* showing balance */
            showTotalExpense.innerText = totalExpense;
            showFinalBalance.innerText = finalBalance;
        }
        else if (inputId == "percentage") {
            /* showing percentage */
            if (isNaN(percentValue) || percentValue < 0) {
                alert("Insert a valid Integer or Helmet League is coming!");
            }
            else if (leftBalance < 0) {
                alert("You don't have enough money to save. Sell your mobile!");
            }
            else {
                savings.innerText = savingAmount;
                remainingBalance.innerText = leftBalance;
            }
        }
    }
    /* extra error handling */
    try {
        if (isNaN(incomeAmount)) {
            throw "Insert a valid Integer or Helmet League is coming!";
        }
        else if (isNaN(foodAmount)) {
            throw "Insert a valid Integer or Helmet League is coming!";
        }
        else if (isNaN(rentAmount)) {
            throw "Insert a valid Integer or Helmet League is coming!";
        }
        else if (isNaN(clothesAmount)) {
            throw "Insert a valid Integer or Helmet League is coming!";
        }
    } catch (error) {
        alert(error);
    }

}

/* calling functions */
/* Income & Expenses */
document.getElementById("final-calculation").addEventListener("click", function () {
    moneyHoney("incomeAndExpense");
})

/* Percentage Calculation */
document.getElementById("percentage-calculation").addEventListener("click", function () {
    moneyHoney("percentage");
})