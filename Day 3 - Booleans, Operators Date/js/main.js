// Exercises: Level 1

let firstName = "Vusal";
let lastName = "Alakbarov";
let country = "Azerbaijan";
let city = "Baku";
let age = 23;
let isMarried = false;
let year = new Date().getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof "10" == 10);

console.log(parseInt("9.8" == 10));

if (firstName) {
  console.log(true);
}

if (age) {
  console.log(true);
}

if (true) {
  console.log(true);
}

if ("") {
  console.log(false); // no output, because it returns false
}

if (0) {
  console.log(false); // no output, because it returns false
}

if (isMarried) {
  console.log(false); // no output, because it returns false
}

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false
console.log("python".length !== "jargon".length);

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
console.log(!("dragon".includes("on") || "python".includes("on"))); // false

let now = new Date();

let fullYear = now.getFullYear();
console.log(fullYear);

let month = now.getMonth();
console.log(month);

let date = now.getDate();
console.log(date);

let day = now.getDay();
console.log(day);

let hours = now.getHours();
console.log(hours);

let minutes = now.getMinutes();
console.log(minutes);

let time = now.getTime();
console.log(time);

// Exercises: Level 2

/*
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
alert("Area: " + area);
*/

/*
let a = +prompt("Enter side a:");
let b = +prompt("Enter side b:");
let c = +prompt("Enter side c:");
let perimeter = a + b + c;
alert("Perimeter: " + perimeter);
*/

/*
let length = +prompt("Enter length:");
let width = +prompt("Enter width:");
let perimeter = 2 * (length + width);
let area = length * width;
alert("Perimeter: " + perimeter + ", Area: " + area);
*/

/*
const PI = Math.PI;
let radius = +prompt("Enter radius:");
let area = PI * radius ** 2;
let circumference = 2 * PI * radius;
alert("Area: " + area + ", Circumference: " + circumference);
*/

let x = -3;
let y = x ** 2 + 6 * x + 9;
console.log(y);

/*
let workHours = +prompt("Enter hours:");
let ratePerHour = +prompt("Enter rate per hour:");
let weeklyEarning = workHours * ratePerHour;
alert("Your weekly earning is " + weeklyEarning);
*/

firstName.length > 7
  ? console.log("your name is long")
  : console.log("your name is short");

console.log(
  `Your first name, ${firstName} is ${
    firstName.length > lastName.length ? "longer" : "shorter"
  } than your family name, ${lastName}`
);

let myAge = 23;
let yourAge = 230;

console.log(
  `I am ${Math.abs(myAge - yourAge)} years ${
    myAge > yourAge ? "older" : "younger"
  } than you.`
);

/*

let birthYear = +prompt("Enter birth year:");
let userAge = now.getFullYear() - birthYear;

if (userAge >= 18) {
  alert(`You are ${userAge}. You are old enough to drive`);
} else {
  alert(
    `You are ${userAge}. You will be allowed to drive after ${
      18 - userAge
    } years.`
  );
}

*/

/*
let years = +prompt("Enter number of years you live:");
let livedSeconds = years * 365 * 24 * 60 * 60;
alert(`You lived ${livedSeconds} seconds.`)
*/

let format1 = `${fullYear}-${month + 1}-${date} ${hours}:${minutes}`;
let format2 = `${date}-${month + 1}-${fullYear} ${hours}:${minutes}`;
let format3 = `${date}/${month + 1}/${fullYear} ${hours}:${minutes}`;

console.log(format1);
console.log(format2);
console.log(format3);

// Exercises: Level 3

let hour = hours > 10 ? hours : "0" + hours;
let minute = minutes > 10 ? minutes : "0" + minutes;
let format4 = `${fullYear}-${month + 1}-${date} ${hour}:${minute}`;
console.log(format4);
