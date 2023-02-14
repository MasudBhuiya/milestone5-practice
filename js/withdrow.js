document.getElementById('btn-withdrow').addEventListener('click', function(){
    const newAmount = getInputFieldById('withdrow-field');
    const previousAmount = getTextElementById('withdrow-total');
    const withdrowTotal = previousAmount + newAmount;
    setElementValue('withdrow-total', withdrowTotal);

    const previousBalanceAmount = getTextElementById('balance-total');
    const newBalanceAmount = previousBalanceAmount - newAmount;
    setElementValue('balance-total', newBalanceAmount);
});