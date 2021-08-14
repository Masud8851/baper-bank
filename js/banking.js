// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
    // pass deposit input  to Total Deposit
    const totalDeposit =document.getElementById('deposit-total')
    totalDeposit.innerText = depositAmount;
    
    // clear the input field 
    depositInput.value='';
})

// handle withdraw button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    
    // pass withdraw input  to  withdrawTotal 
    const totalWithdraw = document.getElementById('withdraw-total')
    totalWithdraw.innerText = withdrawAmount;
    
    // clear the input field 
    withdrawInput.value='';
})