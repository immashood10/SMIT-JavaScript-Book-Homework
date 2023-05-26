// 1. Character Type checkerr

var character = prompt("Enter a Character");

if (!isNaN(character)) {
    document.write("Character Type number: " + character)
}
else if (character >= "A" && character <= "Z") {
    document.write("This is Upper case: " + character);
}
else if (character >= "a" && character <= "z") {
    document.write("This is Lower Case: " + character);
}
else{
    document.write("Write The Right :)");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var integer1 = +prompt("Enter first Interger");
var integer2 = +prompt("Enter second Interger");

if (integer1 > integer2) {
    document.write(integer1 + " First integer is Larger");
}
else if (integer1 < integer2) {
    document.write(integer2 + " Second integer is Larger");
}
else{
    document.write("Both Intergers are equal.");
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var checksignNumber = +prompt("Enter a Number");
if (checksignNumber > 0) {
    document.write("This is Positive Number");
}
else if (checksignNumber < 0) {
    document.write("This is Negative Number");
}
else if (checksignNumber === 0) {
    document.write("This is Equal to 0");
}
else{
    document.write("Atleast Enter a Number");
}

// 4. Check Vowels

var checkVowels = prompt("Enter a Word"); 

if (checkVowels == "a" || checkVowels == "e"  || checkVowels == "i"  || checkVowels == "o"  || checkVowels == "u") {
    document.write("This is a Vowels Letter");
}
else{
    document.write("This is not a Vowels Letter");
}

// 5. Check Password

var password = "mashood123";
var password2 = prompt("Enter a Password");

if (password2 === password) {
    document.write("“Correct! The password you entered matches the original password”.");   
}
else{
    document.write("Incorrect Password!");
}

// 6. This if/else statement does not work. Try to fix it:

var greetings;
var hours = 13;
if (hours > 18) {
    greetings = "Good Day!";
}
else{
    greetings = "Bad Day";
}