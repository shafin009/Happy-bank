
//----------------------Calculate Part---------------

document.getElementById("calculate").addEventListener("click", function () {
	const income = parseFloat(document.getElementById('income').value);


	//------------------------Calculation--------------- 
	const food = parseFloat(document.getElementById('food').value);
	const rent = parseFloat(document.getElementById('rent').value);
	const clothes = parseFloat(document.getElementById('clothes').value);

	const total = food + rent + clothes;
	document.getElementById('expenses').innerText = total;

	const Balance = income - total;
	document.getElementById('balance').innerText = Balance;


});


// ------------------------ Save Part ---------------------

document.getElementById('saving-part').addEventListener("click", function () {


	const income = parseFloat(document.getElementById('income').value);


	//------------------------Calculation--------------- 
	const savingPercentage = parseFloat(document.getElementById('saving').value);
	const savings = (income * savingPercentage) / 100;

	document.getElementById('save').innerText = savings;
	const food = parseFloat(document.getElementById('food').value);
	const rent = parseFloat(document.getElementById('rent').value);
	const clothes = parseFloat(document.getElementById('clothes').value);
	const total = food + rent + clothes;
	const balance = income - total;
	const remainingBalance = balance - savings;

	document.getElementById('remaining').innerText = remainingBalance;
});




















































