document.querySelector('#tip-form').onchange = () => {
 let bill = Number(document.getElementById('billTotal').value);
 let tip = document.getElementById('tipInput').value;
 let tipValue = bill * (tip/100);
 let finalBill = bill * tipValue;
 console.log(finalBill);
 let tipAmount = document.querySelector('#tipAmount');
 let totalBillWithTip = document.querySelector('#totalBillWithTip');

 tipAmount.value = tipValue.toFixed(2);
totalBillWithTip.value = finalBill.toFixed(2);

document.getElementById('results').style.display='block';
};