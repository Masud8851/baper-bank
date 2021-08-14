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
    
    // clear the input field 
    depositInput.value='';
})

// withdraw deposit button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    // get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    
    // pass withdraw input  to Total Withdraw
    const totalDeposit =document.getElementById('deposit-total')
    const previousTotalDeposit = parseFloat(totalDeposit.innerText);
    const newDepositTotal = previousTotalDeposit + newDepositAmount;
    totalDeposit.innerText = newDepositTotal;
    
    // clear the input field 
    depositInput.value='';
})



// handle Balance button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    // get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    
    // pass withdraw input  to  withdrawTotal 
    const totalWithdraw = document.getElementById('withdraw-total')
    totalWithdraw.innerText = withdrawAmount;
    
    // clear the input field 
    withdrawInput.value='';
})

