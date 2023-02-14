document.getElementById('btn-deposit').addEventListener('click', function(){
    const newAmount = getInputFieldById('deposit-field');
    
    const previousAmount = getTextElementById('deposit-total');
    const depositTotal = previousAmount + newAmount;
    setElementValue('deposit-total', depositTotal);

    const previousBalanceAmount = getTextElementById('balance-total');
    const newBalanceAmount = previousBalanceAmount + newAmount;
    setElementValue('balance-total', newBalanceAmount);
})