function getDayName() {
    const browserDate = new Date();
    let currentDay = browserDate.toLocaleDateString('EN', { weekday: 'long' });
    let isNextDay = window.confirm('Current day is: ' + currentDay + '\nWould you like to see the next one?');
    let i;
    while (isNextDay) {
      switch (currentDay) {
        case 'Sunday':
        currentDay = 'Monday';
        break;
        case 'Monday':
        currentDay = 'Tuesday';
        break;
        case 'Tuesday':
        currentDay = 'Wednesday';
        break;
        case 'Wednesday':
        currentDay = 'Thursday';
        break;
        case 'Thursday':
        currentDay = 'Friday';
        break;
        case 'Friday':
        currentDay = 'Saturday';
        break;
        case 'Saturday':
        currentDay = 'Sunday';
        break;
        default:
            console.log("error");
      }
       isNextDay = window.confirm(
        'The next day is: ' + currentDay + '\nWould you like to see the next one?'
      );
    }
  }
getDayName();


///1. Ask from user name
// Ask age
//Create an object with 'name' and 'age' fields + 'greet' method // Hello Im Alex, Im 34





const username=prompt("enter your name");
const Userage=prompt("enter your age");

const obj1={
    name:username,
    age:Userage,
    greet:function(){
        return "Hello" +"I m " + `${this.name}`+"I m "+`${this.age}`
    }


}

console.log(obj1.greet())

//No of times user clicked a button (closure concept)
var count=0;
function updateCounter(){
    count++;
}
updateCounter()