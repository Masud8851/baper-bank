// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get deposit input
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);
    
    // pass deposit input  to Total Deposit
    const totalDeposit =document.getElementById('deposit-total')
    const previousTotalDeposit = parseFloat(totalDeposit.innerText);
    const newDepositTotal = previousTotalDeposit + newDepositAmount;
    totalDeposit.innerText = newDepositTotal;

    // update Balance button event
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
    // clear the input field 
    depositInput.value='';
})


// handle Withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    // get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    
    // pass withdraw input  to Total withdraw
    const totalWithdraw =document.getElementById('withdraw-total')
    const previousTotalWithdraw = parseFloat(totalWithdraw.innerText);
    const newWithdrawTotal = previousTotalWithdraw + newWithdrawAmount;
    totalWithdraw.innerText = newWithdrawTotal;

    // update Balance button event
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    
    // clear the input field 
    withdrawInput.value='';
})





