       //1. city = karachi.

       var city = prompt("Enter a City");
       if (city == "Karachi") {
           document.write("Welcome to the City of Lights"  + "<br />");
       } else {
           document.write("Enter correct city" + "<br />");
       }

       // 2. check Gender

       var gender = prompt("Enter your Gender");

       if (gender == "Male") {
           document.write("Good Morning Sir. "  + "<br />");
       }
       else if (gender == "Female") {
           document.write("Good Morning Ma'am. " + "<br />");
       }
       
       // 3. Traffic Signal.

      var signalColor = prompt("Enter a Color");

       if (signalColor == "Red") {
           document.write("Must Stop!");
       }
       else if (signalColor == "Yellow") {
           document.write("Ready To Move");
       }
       else if (signalColor == "Green") {
           document.write("Go!!!!!");
       }

       // 4. Write the program to take into fuel in liters.

       var fuel = prompt("Enter your Fuel");
       
       if (fuel < 0.25) {
           document.write("“Please refill the fuel in your car”");
       }
       else{
           document.write("Don't Refill");
       }

       // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

       var a = 4;


       if (++a == 5) {
           alert("given condition for variable a is true");
       }

       var b = 82;
       if (b++ === 83) {
           alert("given condition for variable b is true");
       }

       var c = 12;
       if (c++ === 13) {
           alert("condition 1 is true");
       }
       if (c === 13) {
           alert("condition 2 is true");
       }
       if (++c <= 14) {
           alert("condition 3 is true");
       }
       if (c === 14) {
           alert("condition 4 is true");
       }

       var materialCost = 20000;
       var labourCost = 20000;
       var totalCost = materialCost + labourCost; 

       if (totalCost === materialCost + labourCost) {
           alert("The costs Equals");
       }

       if (true) {
           alert("True");
       }

       if (false) {
           alert("False");
       }
       if ("car" < "cat") {
           alert("car is smaller than cat");
       } else {
           alert("cat is smaller than car");
       }

       // 6. Percentage.

       var totalMarks = 300; 
       var marksObtained = prompt("Enter Obtained Marks");
       var percentage = marksObtained / totalMarks * 100;

       if (percentage >= 100) {
           document.write("Incorrect!");
       }
       else if (percentage >= 80) {
           document.write("Total Marks: " + totalMarks + "<br />");
           document.write("Marks Obtained: " + marksObtained + "<br />");
           document.write("Percentage: " + percentage + " %." + "<br />");
           document.write("Grade: A+" + "<br />");
           document.write("Congrats! you are Good");
       }
      else if (percentage >= 70) {
       document.write("Total Marks: " + totalMarks + "<br />");
           document.write("Marks Obtained: " + marksObtained + "<br />");
           document.write("Percentage: " + percentage + " %." + "<br />");
           document.write("Grade: A" + "<br />");
           document.write("Congrats! you are Good");
       }
       else if (percentage >= 60) {
           document.write("Total Marks: " + totalMarks + "<br />");
           document.write("Marks Obtained: " + marksObtained + "<br />");
           document.write("Percentage: " + percentage + " %." + "<br />");
           document.write("Grade: B" + "<br />");
           document.write("You Need to Improve");
       }
       else if (percentage >= 50) {
           document.write("Total Marks: " + totalMarks + "<br />");
           document.write("Marks Obtained: " + marksObtained + "<br />");
           document.write("Percentage: " + percentage + " %." + "<br />");
           document.write("Grade: C" + "<br />");
           document.write("You Need to Improve");
       }
       else if (percentage >= 40) {
           document.write("Total Marks: " + totalMarks + "<br />");
           document.write("Marks Obtained: " + marksObtained + "<br />");
           document.write("Percentage: " + percentage + " %." + "<br />");
           document.write("Grade: D" + "<br />");
           document.write("You Need to Improve");
       }
       else{
           document.write("Total Marks: " + totalMarks + "<br />");
           document.write("Marks Obtained: " + marksObtained + "<br />");
           document.write("Percentage: " + percentage + " %." + "<br />");
           document.write("Sorry! You are Failed Better Luck Next Time");
       }

   // 7. Guess Game.

   var secretNumber = 4 // prompt("Enter a Secret Number");
   var userGuess = prompt("Enter a Number");
   if (userGuess == 1 || userGuess == 2 || userGuess == 3 ||  userGuess == 6 || userGuess == 7 || userGuess == 8 || userGuess == 9 ||  userGuess == 10) {
       document.write("Wrong Number");
   }
   else if (userGuess == 4) {
       document.write("Bingo!");
   }
   else if (userGuess == 5) {
       document.write("“Close enough to the correct answer”.");
   }

   // 8. Write a program to check whether the given number is divisible by 3.

   var numberDivisible = prompt("Enter a Number");
   //var dividedNumber = numberDivisible % 3;

   if (numberDivisible % 3 == 0) {
       document.write("This " + numberDivisible + " is divisibe by: " + 3);
   }
   else{
       document.write("This " + numberDivisible + " is Not divisibe by: " + 3);
   }
   
 //  9. EVEN or ODD.

   var numberr = prompt("Enter a number");
   if (numberr % 2 == 0) {
       document.write("This is an Even number " + numberr);
   } else {
       document.write("This is an Odd number " + numberr);
   }

   // 10. Weather.

   var weatherTemperature = prompt("Enter a Weather Temperature");

   if (weatherTemperature >= 40) {
       document.write("This is Too Hot Outside!");
   }
   else if (weatherTemperature >= 30) {
       document.write("The Weather Today is Normal");
   }
   else if (weatherTemperature >= 20) {
       document.write("Today Weather is Cool");
   }
   else if (weatherTemperature >= 10) {
       document.write("Omg! Today weather is Too cool");
   }

   // 11. Basic Calculator

   var firstNumber = prompt("Enter First Number");
   var operation = prompt("Enter Sign");
   var secondNumber = prompt("Enter Second Number");

   if (operation == "*") {
       document.write(firstNumber * secondNumber);
   }
   else if (operation == "/") {
       document.write(firstNumber / secondNumber);
   }
   else if (operation == "-") {
       document.write(firstNumber - secondNumber);
   }
   else if (operation == "+") {
       document.write((firstNumber) + secondNumber);
   }
   else if (operation == "%") {
       document.write(firstNumber % secondNumber);
   }
   else{
       document.write("Enter a Sign");
   }