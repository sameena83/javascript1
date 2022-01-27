//Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
var num1=prompt("enter first number");
var num2=prompt("enter first number");

function checkNum(num1,num2){
    return num1<num2?-1 : num1>num2 ? 1:0;
    }
checkNum(num1,num2);

//Write a function that counts the factorial of a given number. 

function factorFinder(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  factorFinder(num);

  //Write a function that accepts three separate digits
  // and makes them a number. For example, 1, 4, and 9 will become 149.

  var one=prompt("enter first number");
  var two=prompt("enter first number");
  var three=prompt("enter first number");
  var numArray=[];
  function addAAll(one,two,three){
      numArray.push(one);
      numArray.push(two);
      numArray.push(three);
      let finalNumber = +numArray.join("")
      console.log(finalNumber)

      
  }
addAAll(one,two,three)

//Write a function that accepts the width and length of a rectangle and calculates its area.
// If there is only one parameter given, it counts as a square. 

function area(...theArgs) {
    if(theArgs.length===1){
        return theArgs*theArgs;
    }else{
        return theArgs.reduce((previous, current) => {
            return previous * current;
          });
        }}
    
console.log("The area is "+area( 3));
 
console.log("The area is "+area(2,4));


//Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. 
//For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.



 
    



