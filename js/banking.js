// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    
    // pass input deposit to Total Deposit
    const totalDeposit =document.getElementById('deposit-total')
    totalDeposit.innerText = depositAmount;
    
    // clear the input field 
    depositInput.value='';
})