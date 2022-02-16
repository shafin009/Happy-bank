
//--------------My income, total expenses & remaining balance-------- 
document.getElementById("calculate").addEventListener('click', function () {

    const MyIncome = document.getElementById("income").value;
    const MyIncomeValue = parseFloat(MyIncome);

    const eatFood = document.getElementById("food").value;
    const eatFoodValue = parseFloat(eatFood);

    const myRent = document.getElementById("rent").value;
    const myRentValue = parseFloat(myRent);

    const myClothes = document.getElementById("clothes").value;
    const myClothesValue = parseFloat(myClothes);

    const total = eatFoodValue + myRentValue + myClothesValue;
    document.getElementById("expenses").innerText = total;

    const remainingBalance = MyIncomeValue - total;
    document.getElementById("balance").innerText = remainingBalance;

})

document.getElementById