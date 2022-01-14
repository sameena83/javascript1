//Request a user’s name and display the response “Hello, [name]”.
var userName=window.prompt("enter your name");
console.log("Hello"+" "+userName);
//Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 

function AgeCalculator(birthYear,currentYear){
    age= currentYear-birthYear;
    return age;
}
//Request a length of a side of a square from a user and display the perimeter of the square. 
var side=window.prompt("Enter side of square")

 function findArea(side){
    var area=side *side;
    return area;

}
findArea(side)

//Request a radius of a circle and display the area of such a circle. 
var radius=window.prompt("Enter radius")

 function CircleArea(radius){
    var area=3.14*radius*radius;
    return area;

}
CircleArea(radius)

///Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

var distance=window.prompt("enter the distaance between A and B")
var time=window.prompt("Enter the approximate time need to travel")
function Speed(Dist, timeNeeded){
    var speed=Dist/timeNeeded;
    return speed;
}
Speed(distance,time)

//Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
var noOfUSD=window.prompt("enter no of dollars to be converted")

function converter(USD){
    const conversionRate=0.88;
    noOfEuros=conversionRate*noOfUSD;
    return noOfEuros;
}

converter(noOfUSD)

//A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 

var memory=window.prompt("how many GB")
function GB(memory){
    const value=820;
    var files=memory/value;
    return files;
}

GB(memory)

//A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 

var money=window.prompt("enter the money in wallet");
var price=window.prompt("enter price per piece of chocolate")
function purchase(money,price){
    var number=Math.floor(money/price);
    var reminder=money%price;
    console.log("The number of chocolate is"+number);
    console.log("The remindaer you got back is"+reminder)
}
purchase(money,price)

//The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.
var amount=window.prompt("enter the savings amount")
function interestCalculator(amount){
    var interestRate=0.05;
    var monthlyInterestRate=interestRate/12;
    var twomonthInterest=monthlyInterestRate*2;
    var totalinterest=twomonthInterest*amount;
    var grandTotal=totalinterest+amount;
   
    console.log("The total interest for the"+amount+" for 2 months is"+totalinterest)
}
interestCalculator(amount)