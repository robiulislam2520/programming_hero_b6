
/**
 * 
 * Index.html file ar JS work
 * 
 */

// select all doms
let depositAmount = document.getElementById('depositAmount'),
withdrawAmount = document.getElementById('withdrawAmount'),
totalBalance = document.getElementById('totalBalance'),
depositValueInput = document.getElementById('depositValue'),
withdrawValueInput = document.getElementById('withdrawValue'),
depositBtn = document.getElementById('depositBtn'),
withdrawBtn = document.getElementById('withdrawBtn');


// create all function
function deposit(){
   const updateDeposit = parseInt(depositValueInput.value);

   if(depositValueInput.value === ''){
    return alert('Please give a number')
   } else{
    depositAmount.innerText = updateDeposit + parseInt(depositAmount.innerText);
    totalBalance.innerText =  parseInt(totalBalance.innerText) + parseInt(depositAmount.innerText);
   }

   depositValueInput.value = '';
}

function withdraw(){
    const updateWithdraw = parseInt(withdrawValueInput.value);
    
    if(withdrawValueInput.value === ''){
        return alert('Please give a number')
    }
    else{
        withdrawAmount.innerText = updateWithdraw + parseInt(withdrawAmount.innerText);
        totalBalance.innerText =  parseInt(totalBalance.innerText) - parseInt(withdrawAmount.innerText);
   }

   withdrawValueInput.value = '';
}

// events listeners
depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);
