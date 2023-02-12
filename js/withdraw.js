
document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    withdrawField.value = ' ';
    

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalAmount.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    const newWithdrawTotal = withdrawTotal + withdrawAmount;
    withdrawTotalAmount.innerText = newWithdrawTotal;

    
     
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    const newBalanceTotal =  previousBalanceTotalAmount - withdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})