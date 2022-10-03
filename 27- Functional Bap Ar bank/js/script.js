function convertStringToNumber(id) {
    const inputField = document.getElementById(id);
    const inputFiledString = inputField.value;
    const inputFieldValue = parseInt(inputFiledString);

    inputField.value = '';

    return inputFieldValue;

}

function getElementValueById(id) {
    const currentAmount = document.getElementById(id);
    const currentAmountStrings = currentAmount.innerText;
    const currentAmountNumber = parseInt(currentAmountStrings);

    return currentAmountNumber;
}

function setAmount(elementId, newValue) {
    const textField = document.getElementById(elementId);
    textField.innerText = newValue;

}

function calculateBalance(inputId, textFieldId, totalBalanceId) {
    const inputMoney = convertStringToNumber(inputId);
    const currentAmount = getElementValueById(textFieldId);

    setAmount(textFieldId, inputMoney + currentAmount)

    const previousTotal = getElementValueById(totalBalanceId)

    if(inputId ==='withdrawValue'){
        setAmount(totalBalanceId, previousTotal - inputMoney)
    } else{
        setAmount(totalBalanceId, previousTotal + inputMoney)
    }
}

// Event Listeners
document.getElementById('depositBtn').addEventListener('click',  ()=>{
    calculateBalance('depositValue', 'depositAmount','totalBalance')
})

document.getElementById('withdrawBtn').addEventListener('click', ()=>{
    calculateBalance('withdrawValue', 'withdrawAmount','totalBalance')
    
})

