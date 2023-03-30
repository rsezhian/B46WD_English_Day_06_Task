// <!-- 2. -->
alert("I’m invoked!");

// <!-- 3. -->
alert("I'm JavaScript!");
alert("Hello"); // this line is not having semicolon
alert(`Wor
 ld`);
alert(3 + 1 + 2); // this is multiple line code and its working

// <!-- 4. -->
let admin = 9,
  fname = 10.5;
fname = "Guvi";
let lname = "geek";
admin = fname + " " + lname;
alert(admin); // "Guvi geek"

// <!-- 5. -->
let fname = 10.5;
fname = "Guvi";
lname = "geek";
let namee = fname + " " + lname;
alert(`hello ${namee}`);

// <!-- 6. -->
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));

// <!-- 7. -->
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));

// <!-- 8. -->
var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

var a = "2" > "2";
// will print diffused

// <!-- 9. -->
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
  console.log("OMG it works for any number inc 0");
} else {
  console.log("Success");
}

a = "";
//will print success

// <!-- 10. -->
let valuee = parseInt(prompt("How many runs you scored in this ball"));
if (valuee === 4) {
  console.log("You hit a Four");
} else if (valuee === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

// <!-- 11. -->
let login = "Employee";
let message =
  login == "Employee"
    ? "welcome the Employee"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);

// <!-- 12. -->
// You cant change the value of the msg
let message;
if (null || 2 || undefined) {
  message = "welcome boss";
} else {
  message = "Go away";
}
console.log(message);

// <!-- 13. -->
let message;
let lock = "";
//Dont change any code below this
if (null || lock || undefined) {
  message = "Go away";
} else {
  message = "welcome the Boss";
}
console.log(message);

// <!-- 14. -->
let message;
let lock = "";
//Dont change any code below this
if ((lock && " ") || undefined) {
  message = "Go away";
} else {
  message = "welcome the Boss";
}
console.log(message);

// <!-- 15. -->
//You can change only 2 characters
let i = 3;
while (i) {
  console.log(i--);
}

// <!-- 16. -->
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

// <!-- 17. -->
//You are allowed to modify only one character
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}

// <!-- 18. -->
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// <!-- 19. -->
let countdown = 100;
while (countdown > 0) {
  if (countdown == 0) {
    console.log("bomb triggered");
  }
  countdown--;
}

// <!-- 20. -->
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);

// "hi" will be printed (0 -- false; 1-- true)

// <!-- 21. -->
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);

// "hi" will be printed (0 -- false; 1-- true)
