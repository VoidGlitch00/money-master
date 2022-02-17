/* Income & Expenses */
document.getElementById("final-calculation").addEventListener("click", function () {
    /* handling all input events */ 
    const incomeInput = document.getElementById("income-input");
    const foodExpenseInput = document.getElementById("food-expense-input");
    const rentExpenseInput = document.getElementById("rent-expense-input");
    const clothesExpenseInput = document.getElementById("clothes-expense-input");
    const showTotalExpense = document.getElementById("total-expense");
    const showFinalBalance = document.getElementById("final-balance");
    /* taking inputs as value */
    const incomeAmount = parseInt(incomeInput.value);
    const foodAmount = parseInt(foodExpenseInput.value);
    const rentAmount = parseInt(rentExpenseInput.value);
    const clothesAmount = parseInt(clothesExpenseInput.value);
    /* Calculation */
    const totalExpense = foodAmount + rentAmount + clothesAmount;
    const finalBalance = incomeAmount - totalExpense;
    /* showing balance */
    showTotalExpense.innerText = totalExpense;
    showFinalBalance.innerText = finalBalance;
})

/* Percentage Calculation */
