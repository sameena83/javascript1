//Request a three-digit number from a user and check whether it has identical digits in it.
var num=prompt("enter a three digit number")


function checkSimilarity(num)
{
    if(num.length!=3){
        console.log("please enter a three digit number")
    }else if(num[0] === num[1] === num[2]){
        console.log("All three digits are equal")

    }else
    {
        
        console.log("All three digits are  not equal")
    
    
    }
   
}

document.write(checkSimilarity(num));

//Request a five-unit number from a user and check whether it is a palindrome.
var pal=prompt("enter a five digit number")

function checkPaliandrome(pal){
    if(pal.length!=5){
        console.log("Please enter a five digit number")
    }else if(pal[0]===pal[4] && pal[1]===pal[3]){
        console.log("The number "+pal+ " is a palendrom")
    }else 
    {
        console.log("The number" +pal+ " is not palendrom")
    }

}

document.write(checkPaliandrome(pal))
//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 

var dollar=prompt("enter an amount in dollar to convert");
var currency=prompt("Choose a Currecy to convert To (EUR, SEK, AUD)");
function currencyConverter(currency, dollar){
    if(currency==="SEK"){
        var value=dollar * 9.05;
        console.log(value);
    }else if (currency==="EUR"){
        var value=dollar * 0.88;
        console.log(value);

    }else if (currency==="AUD"){
        var value=dollar * 1.39;
        console.log(value);

    }else 
    {
        console.log("choose a valid  currency (SEK,EUR,AUD) ")
    }
}
document.write(currencyConverter(currency, dollar));

//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.
var circumferance=prompt("Enter the circumference of a circle");
var perimeter=prompt("Enter the perimeter of the square");
function fitFunction(circumferance,perimeter){
    var Diameter=circumferance/(Math.PI);
    var radius=Diameter/2;
    var area=Math.PI*(radius*radius);
    var areaRounded=area.toFixed(0);
    var side = perimeter / 4
    var square= side * side;

    if(square >= areaRounded){
        console.log("The circle will fit inside the square");

    }
    else if(square < areaRounded) {
        console("This circle will not fit inside the square")
    }
    else{
        console.log("please enter a valid number")
    }
}
document.write(fitFunction(circumferance,perimeter));

//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.
