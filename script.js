
//----------------------Calculate Part-----------------------

document.getElementById("calculate").addEventListener("click", function () {
	let income = parseFloat(document.getElementById('income').value);
	let incomeSource = income;

	//--------------error message-----------

	if (isNaN(incomeSource) || incomeSource < 0) {
		error('Please enter a valid number');
	}

	//------------------------Calculation--------------- 

	let food = parseFloat(document.getElementById('food').value);
	let rent = parseFloat(document.getElementById('rent').value);
	let clothes = parseFloat(document.getElementById('clothes').value);

	let foodValue = food;
	let rentValue = rent;
	let clothesValue = clothes;

	//------------------Error Message Handler----------------

	if (isNaN(foodValue) || foodValue < 0) {
		error('Please enter a valid number');
	}
	if (isNaN(rentValue) || rentValue < 0) {
		error('Please enter a valid number');
	}
	if (isNaN(clothesValue) || clothesValue < 0) {
		error('Please enter a valid number');
	}

	//--------------Total Expenses Calculation-----------------

	const total = foodValue + rentValue + clothesValue;
	document.getElementById('expenses').innerText = total;

	const bill = incomeSource - total;
	document.getElementById('balance').innerText = bill;

	//--------------error message-------------

	if (incomeSource < total) {
		error('Error!!!')
	}


});




// ------------------------ Save Part ---------------------

document.getElementById('saving-part').addEventListener("click", function () {

	let income = parseFloat(document.getElementById('income').value);
	let incomeSource = income;


	//------------------error message-------------

	if (isNaN(incomeSource) || incomeSource < 0) {
		error('Please enter a valid number!!!');
	}

	//------------------------Saving Calculation --------------- 

	let savingPercentage = parseFloat(document.getElementById('saving').value);
	let savings = (incomeSource * savingPercentage) / 100;
	let mySaving = savings;


	//------------------error message--------------

	if (isNaN(mySaving) || mySaving < 0) {
		error('Please enter a valid number!!!');
	}
	//-----------------calculation-------------------

	document.getElementById('save').innerText = mySaving;
	const foodValue = parseFloat(document.getElementById('food').value);
	const rentValue = parseFloat(document.getElementById('rent').value);
	const clothesValue = parseFloat(document.getElementById('clothes').value);


	//--------------error message---------------

	const total = foodValue + rentValue + clothesValue;
	const balance = incomeSource - total;
	const remainingBalance = balance - mySaving;

	//-------------------Remaining Rrror Handler Message----------

	if (remainingBalance < 0) {
		error('Invalid!');
	} else {

		document.getElementById('remaining').innerText = remainingBalance;
	}


});

//---------------------Error message Function-------------------

function error(msg) {
	return alert(msg);
}

















































