//Question number one

const car = {
  manufactorer: "audi",
  model: "audi2020",
  year_of_release: 2020,
  speed: 200,
  cardesc: function () {
    return (
      "The car belongs to " +
      `${this.manufactorer}` +
      "the model is" +
      `${this.model}` +
      "is released in" +
      `${this.year_of_release}`
    );
  },
  speedFinder: function (dist) {
    let time = dist / this.speed;
    if (time >= 4) {
      time = time + 1;
    }

    return "The car look " + time + " hour  to cover " + `${dist}`;
  },
};

console.log(car.cardesc());

console.log(car.speedFinder(800));

//Question number two

const newObj = {
  numerator: 5,
  denominator: 6,

  addition: function () {
    let newN = 5 / 1;
    let newD = 1 / 6;
    let add = 5 / 1 + 1 / 6;

    return `${add}`;
  },
  subtraction: function () {
    let newN = 5 / 1;
    let newD = 1 / 6;
    let sub = 5 / 1 - 1 / 6;

    return `${sub}`;
  },

  multiplication: function () {
    let newN = 5 / 1;
    let newD = 1 / 6;
    let mul = (5 / 1) * (1 / 6);

    return `${mul}`;
  },

  division: function () {
    let newN = 5 / 1;
    let newD = 1 / 6;
    let div = 5 / 1 / (1 / 6);

    return `${div}`;
  },
};

console.log(newObj.addition());
console.log(newObj.subtraction());
console.log(newObj.multiplication());
console.log(newObj.division());

//question number three

const dateObj = {
  hours: 2,
  minute: 20,
  second: 40,

  displayTime: function () {
    return (this.hours +" " + ":" + " " +this.minute + " " + ":" + " " + this.second +  " "
    );
  },
  changeSecond: function (sec) {
    var newsec = this.second + sec;
    if (newsec >= 60) {
      newsecOne = newsec - 60;
      this.second = newsecOne;
      this.minute = this.minute + 1;

      if (this.second >= 60) {
        this.second = this.second - 60;
        this.minute = this.minute + 1;
      }
      if (this.minute >= 60) {
        this.minute = this.minute - 60;
        this.hours = this.hours + 1;
      }
      return this.hours +" " + ":" +" " +this.minute +" " +":" +this.second + " "
      
    }
  },
  changeMinute: function (min) {
    var newMin = min;
    if (newMin >= 60) {
      newMinOne = newMin - 60;
      this.minute = newMinOne;
      this.hours = this.hours + 1;
    } else {
      this.minute = this.minute + newMin;
      if (this.minute >= 60) {
        this.minute = this.minute - 60;
        this.hours = this.hours + 1;
      }
    }
    return this.hours + " " + ":" + " " + this.minute + " " + ":" + this.second + " "
    
  },

  changeHour: function (hour) {
    var newHour = hour;
    if (newHour >= 24) {
      console.log("error");
    } else if (newHour + this.hours > 24) {
      console.log("error");
    } else if (newHour <= 24) {
      this.hours = this.hours + newHour;
    }

    return this.hours + " " + ":" + " " + this.minute + " " + ":" + this.second;
  },
};

console.log(dateObj.displayTime());
console.log(dateObj.changeSecond(60));
console.log(dateObj.changeHour(20));
console.log(dateObj.changeMinute(50));
