//Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

var num1=prompt("enter a number")
function sumOfNumbers(num1){
    var sum=0;
    for(let i=0;i<=num1;i++){
        sum+=i;
    }
return sum;
}

document.write(sumOfNumbers(num1));

//Request two numbers and find only their largest common divisor.
var x=prompt("enter the first number");
var y=prompt("enter the second number");
function gcd(x, y) {
    if(typeof Number(x)==='number' && typeof Number(y) ==='number'){
         var sum;
         x=Number(x)
         y=Number(y);
         while(y){
             var temp = y;
             y = x % y;
             x = temp;
         }
         return x;
        }
    else{
        console.log("please enter a vaalid number for x and y")
    }

    }
    
  
gcd(x,y)

//Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

var num2=prompt("enter a number")
function divisorFinder(num2){
    var arr=[];
    for(let i=1;i<=num2;i++){
        if(num2%i==0)
        arr.push(i);
        
        
    }
return arr;
}
divisorFinder(num2);


//Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
var digits=prompt("enter a number")

function digitFinder(digits){
    var Diglenght=digits.length;
    console.log(Diglenght);

    }
    
digitFinder(digits)

//Request 10 numbers from a user and count, how many are positive, negative, or zero.
// Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 

var inputArray = [];
var size = 9; //Maximum Array size
var pArray=[];
var nArray=[];
var zArray=[];
var oddArray=[];
var evenArray=[];

for(var i=0; i<=size; i++) {
	

	inputArray[i] = prompt('Enter Element ' + (i+1));
}
for (let i =0;i<=inputArray.length;i++){
    if(inputArray[i] > 0 && inputArray[i] !== 0 ){
        pArray.push(inputArray[i]);
    }
    else if(inputArray[i]<0){
        nArray.push(inputArray[i] && inputArray[i] !== 0 );
    }else if(inputArray[i]==0){
        zArray.push(inputArray[i]);
    }
}

for(i in inputArray ){
    if(i%2===0){
        evenArray.push(inputArray[i]);

    }else if(i%2!==0){
        oddArray.push(inputArray[i]);

    }
}
console.log("number of positive numbers in array  are "+pArray.length);
console.log("number of nagative numbers in array are "+nArray.length);
console.log("number of zeros numbers in array  are "+zArray.length);
console.log("number of odd numbers in array are "+oddArray.length);
console.log("number of even numbers in array  are "+evenArray.length);

//Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more.
// The loop continues until the user refuses. 
var num1=prompt("Enter 1st number");
var num2=prompt("Enter 2nd number")
var operator=prompt("enter an operator (+,/,-,*)");
var val;

    function calculator(num1,num2,operator){
        switch(operator){
            case '+': 
                  val=Number(num1)+Number(num2);
                  console.log(val);
                  break;
            
            case '-': 
                   val=Number(num1)-Number(num2);
                   console.log(val);
                   break;
            
            case '*': 
                   val=Number(num1)*Number(num2);
                   console.log(val);
                  
                   break;
        
            case '/':
                   val=Number(num1)/Number(num2);
                   console.log(val);
                   
                   break;
            default:
                    console.log("enter valid operator and numbers");
        
        }
    
    }
    calculator(num1,num2,operator);



var toContinue=prompt("enter yes to continue and no to stop");




//Request a number from a user and ask by how many digits to move it.
// Move the digits and display the result (if the number 123456 needs to be moved by 2 digits,
// the result will be 345612).
var num=prompt("Enter a number");
var newDig=prompt("enter how many digit to move");
var newArr=[]
var finalArray=[];
var final=[];


function moveTheDigit(num,newDig){
    let myFunc = number => Number(number);
    var intArr = Array.from(String(num), myFunc);
    var remaining=intArr.length-newDig;

    for(let i=0;i<=newDig-1;i++){
        newArr.push(intArr[i])

    }
console.log(newArr);

final=intArr.concat(newArr);
console.log(final);
finalArray=final.slice(newDig);
let finalNumber = +finalArray.join("")
console.log(finalNumber);

}
moveTheDigit(num,newDig)

//Loop day input like this: «Day of the week. Would you like to see the next one?» which continues 
//as long as the user clicks OK.




let arrayOne=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
function DaysFinder(arrayOne){
    for(let i=0;i<=arrayOne.length;i++){
        console.log(+i+1+"day of the week is"+arrayOne[i]);
        var wish=prompt("Would you Like to see the next one? Press Yes to Continue,No to stop")
        
        if(wish=='No'){
            break;
    
        }
        if(i+1===7){
            break;
        }
      
    }
    console.log("Thanks for using our service")
    
}
DaysFinder(arrayOne);
//Display the multiplication table of all numbers from 2 to 9. 
//Every number has to be multiplied by 1 to 10. 

for(i=2;i<=9;i++){
    for(j=1;j<=10;j++){
       let num=i*j;
       
       document.write(+i+'*'+j+'='+num+"\n\n\n");
       document.write ("<br>");
       

    }
    document.write('*************************')
    document.write ("<br>");
}


    
    
    

