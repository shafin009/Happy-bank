
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

})







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

//-----------------------------error message--------------------------













































// //--------------My income, total expenses & remaining balance--------

// function calculating() {
//     const MyIncome = document.getElementById("income").value;
//     const MyIncomeValue = parseFloat(MyIncome);

//     const eatFood = document.getElementById("food").value;
//     const eatFoodValue = parseFloat(eatFood);

//     const myRent = document.getElementById("rent").value;
//     const myRentValue = parseFloat(myRent);

//     const myClothes = document.getElementById("clothes").value;
//     const myClothesValue = parseFloat(myClothes);

//     const total = eatFoodValue + myRentValue + myClothesValue;
//     document.getElementById("expenses").innerText = total;

//     let remainingBalance = MyIncomeValue - total;
//     document.getElementById("balance").innerText = remainingBalance;

// }

// document.getElementById("saving-part").addEventListener("click", function () {

//     const MyIncome = document.getElementById("income").value;
//     const MyIncomeValue = parseFloat(MyIncome);

//     const saving = document.getElementById("saving").value;
//     const mySave = parseFloat(saving);

//     if (mySave % 100 == true) {
//         return mySave * MyIncomeValue;
//     }

//     let saveValue = mySave * MyIncomeValue;

//     document.getElementById("save").innerText = saveValue;


// })

// document.getElementById("saving-part").addEventListener("click", function () {

//     const saving = document.getElementById("saving").value;
//     const mySave = parseFloat(saving);

//     const mySaving = remainingBalance / mySave;
//     document.getElementById("save").innerText = mySaving;

// })

// function updateNumber(isIncreasing, product) {
//     const savingInput = document.getElementById("saving");
//     var number = savingInput.value;
//     if (isIncreasing == true) {
//         productNumber = parseflot(number);
//     }




//     // else if (productNumber > 0) {
//     //     productNumber = parseInt(productNumber) - 1;
//     // }
//     // productInput.value = productNumber;
//     // // update total
//     // const productTotal = document.getElementById(product + '-total');
//     // productTotal.innerText = productNumber * price;
//     // // calculate total
//     // calculateTotal();
// }