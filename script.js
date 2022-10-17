// https://v6.exchangerate-api.com/v6/4472259867cfcc0f65f38fc2/latest/USD
const currencyOne = document.querySelector('.select-1');
const currencyTwo = document.querySelector('.select-2');
const amountOne = document.querySelector('.amount-input');
const amountTwo = document.querySelector('.amount-result');
const swap = document.querySelector('.btn');
const rate = document.querySelector('.rate');
const lastanswer = document.querySelector('.exchange-rate');



// calculate function

 swap.addEventListener("click", () => {
	let temp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = temp
})

 function calculate(){
	const curOne = currencyOne.value;
	const curTwo = currencyTwo.value;
	const finalURL = `https://v6.exchangerate-api.com/v6/4472259867cfcc0f65f38fc2/latest/${curOne}`

 	fetch(finalURL)
 	.then(res => res.json())
	.then(data => {
 		const rates = data.conversion_rates[curTwo];

 		rate.innerText = ` Rate : 1 ${curOne} = ${rates} ${curTwo}`

 		 let ratess = (amountOne.value * rates).toFixed(2)
 		 const cOne = currencyOne.options[currencyOne.selectedIndex].text;
 		 const cTwo = currencyTwo.options[currencyTwo.selectedIndex].text;

 		lastanswer.innerText = `${amountOne.value} ${cOne} = ${ratess} ${cTwo}`

 
 	})
 }



let answer = document.querySelector('.butn');
answer.addEventListener("click", () => {
	calculate();
})


currencyOne.addEventListener('change');
currencyTwo.addEventListener('change');
amountOne.addEventListener('input');
amountTwo.addEventListener('input');
calculate();



