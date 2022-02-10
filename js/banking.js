// handle deposit button

document.getElementById('deposit-button').addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount)

    const depositTotal = document.getElementById("total-deposit-money")
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;


    const balanceTotal = document.getElementById("balance-total")
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalaceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalaceTotal
    depositInput.value = "";

});

// withdraw

document.getElementById("withdraw-button").addEventListener("click", function () {

    // console.log("click")
    const withdrawInput = document.getElementById("withdraw-input");
    const WithdrawAmountText = withdrawInput.value;

    const newWithdrawAmount = parseFloat(WithdrawAmountText)

    // console.log(newWithdrawAmount);

    const withdrawTotal = document.getElementById("total-withdraw-money")

    console.log(withdrawTotal)
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText)
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    withdrawInput.value = "";
    // update balance
    const balanceTotal = document.getElementById("balance-total")

    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalaceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalaceTotal;


})



