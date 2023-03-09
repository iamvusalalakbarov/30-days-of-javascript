// Exercises: Level 1

let challenge = "30 Days Of JavaScript";
console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));

console.log(challenge.includes("Script"));

console.log(challenge.split());
console.log(challenge.split(" "));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));

console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let because =
  "You cannot end a sentence with because because because is a conjunction";

console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));
console.log(because.search("because"));

console.log(" 30 Days of JavaScript ".trim());

console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));

console.log(challenge.match(/a/g));

console.log("30 Days Of ".concat("JavaScript"));

console.log(challenge.repeat(2));

// Exercises: Level 2

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log(typeof +"10");

console.log(Math.round("9.8"));

let python = "python";
let jargon = "jargon";
console.log(python.includes("on"));
console.log(jargon.includes("on"));

let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes(jargon));

let random1 = Math.floor(Math.random() * 101);
console.log(random1);

let random2 = Math.floor(Math.random() * 51) + 50;
console.log(random2);

let random3 = Math.floor(Math.random() * 256);
console.log(random3);

let js = "JavaScript";
let randomChar = Math.floor(Math.random() * js.length);
console.log(js.charAt(randomChar));

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

let tripleBecause = "because because because";
console.log(
  because.substr(because.search(tripleBecause), tripleBecause.length)
);

// Exercises: Level 3

let love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(love.match(/love/g).length); // case sensitive, only looks for "love"
console.log(love.match(/love/gi).length); // not case sensitive, counts "Love" as well

console.log(because.match(/because/g).length);

const sentence2 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const cleanSentence = sentence2.replace(/[@#$%&;]/g, "");
console.log(cleanSentence);

let earning =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let earns = earning.match(/\d+/g);

let totalAnnualIncome = +earns[0] * 12 + +earns[1] + +earns[2] * 12;
console.log(totalAnnualIncome);
