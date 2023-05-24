        // 1.Write a program to take a number in a variable, do the required arithmetic to display the following result.

        var number =10;
        document.write("The value of a is: " + number + "<br />");

        document.write("The value of ++a is: " + ++number  + "<br />");
        console.log("The value of ++a is: " + number);

        document.write("The value of a++ is: " + number++ + "<br />");
        console.log("The value of a++ is: " + number);

        document.write("The value of --a is: " + --number  + "<br />");
        console.log("The value of --a is: " + number);

        document.write("The value of a-- is: " + number--  + "<br />");
        console.log("The value of a-- is: " + number);

        // 2. What will be the output in variables a, b & result after execution of the following script:

        var a = 2, b = 1;
        document.write("a is: " + a + "<br />");
        document.write("b is: " + b + "<br />");

        var result = --a - --b + ++b + b--;
        document.write("Result is: " + result + "<br />");
        
       // 3. Write a program that takes input a name from user & greet the user.

        var inputUser = prompt("What is your name?", "Enter a Name");
        document.write("Hey " + inputUser);

        // 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
        
        var newNumber = prompt("Enter a Number");
        var secondNumber = 5

        if (newNumber || 5) {
            for (let i = 1; i < 11; i++) {
                var result = newNumber * i;

                document.write(newNumber + " x " + i + " = " + result + "<br />");
            }
        
        }
        else if (secondNumber || "") {
            for (let i = 1; i < 11; i++) {
                var result2 = secondNumber * i;

                document.write(secondNumber + " x " * i + " = " + result2  + "<br />");   
        } }
        else {
            for (let i = 1; i < 11; i++) {
                var result2 = secondNumber * i;

                document.write(secondNumber + " x " * i + " = " + result2  + "<br />");   
        }}



        // }

        // 6. Percentage.
        
        var subject1 = "urdu";  //prompt("subject 1");
        var subject2 = "english";   //prompt("subject 2");
        var subject3 = "maths";  //prompt("subject 3");
        var totalMarks = 100;
        var grandTotal = 300;
        var marksObtSub1 = prompt("Obtained Marks subject 1");
        var marksObtSub2 = prompt("Obtained Marks subject 2");
        var marksObtSub3 = prompt("Obtained Marks subject 3");


        document.write(subject1 + "   " + totalMarks  + "  " + marksObtSub1 + "  " + marksObtSub1 / totalMarks * 100 + " %" + "<br />");
        document.write(subject2 + "   " + totalMarks  + "  " + marksObtSub2 + "  " + marksObtSub2 / totalMarks * 100 + " %" + "<br />");
        document.write(subject3 + "   " + totalMarks  + "  " + marksObtSub3 + "  " + marksObtSub3 / totalMarks * 100 + " %" + "<br />");