        // 2 variables in 3rd variable
        var num1 = 13;
        var num2 = 9;

        var num3 = num1 + num2;
        alert("The sum of " + num1 + " and " + num2 + " is " + num3);

        var num4 = num1 - num2;
        alert("The sum of " + num1 + " and " + num2 + " is " + num4);

        var num5 = num1 * num2;
        alert("The sum of " + num1 + " and " + num2 + " is " + num5);

        var num6 = num1 / num2;
        alert("The sum of " + num1 + " and " + num2 + " is " + num6);

        var num4 = num1 % num2;
        alert("The sum of " + num1 + " and " + num2 + " is " + num4);

        //3. Declare a variable with maths expressions.

        var number;
        document.write("Value after variable declaration is: " + number + "<br />");

        number = 3;
        document.write("Initial Value: " + number  + "<br />");

        var incrementedNum = number++;
        document.write("Value after Increment is: " + number + "<br />");

        number += 7;
        document.write("Value after addition is: " + number + "<br />");

        var decrementNum = number--;
        document.write("Value after Decrement is: " + number + "<br />");

        var divideNum = number % 3;
        document.write("Value after Remainder is: " + divideNum + "<br />");

        // 4. movie Ticket.

        var ticketPrice = 600 * 5;
        var tiketQuantity = 5;

        document.write("Someone has buys a ticket Total cost of " + tiketQuantity + " tickets is " + ticketPrice + "PKR" +"<br />");

        //5. Table

        var heading = document.write("<h2>Multiplication Table of 4</h2>");
        for (let i = 1; i < 11; i++) {
            var result = 4 * i;
            document.write("4 " + " x " + i + " = " + result + "<br />");
        }
        
       // 6.

       var celcius = 25;
       var fahrenheit = 70;
       convertCintoF = (celcius * 9/5) + 32;
       convertFintoC = (fahrenheit - 32) * 5/9;
       
       document.write(celcius + "°C" + " is " + convertCintoF  + "<br />");
       document.write(fahrenheit + "°F" + " is " + convertFintoC  + "<br />");

        // 7. Shopping Cart

        var item1 = 650;
        var item2 = 100;
        var quantityItem1 = 3;
        var quantityItem2 = 7;
        var shippingCharges = 100;

        document.write("Price is Item 1 is: " + item1 + "<br>");
        document.write("Quantity of Item 1 is: " + quantityItem1 + "<br>");
        document.write("Price is Item 2 is: " + item2 + "<br>");
        document.write("Quantity of Item 2 is: " + quantityItem2 + "<br>");
        document.write("Shipping Charges: " + shippingCharges + "<br>" + "<br>");

        document.write("Total cost of your order is: " + (item1 * 3 + item2 * 7 + shippingCharges));

        // 8. Marksheet

        var totalMarks = 980;
        var marksObtained = 804;

        document.write(marksObtained / totalMarks * 100 + "%" + "<br>" + "<br>");

        // 9. Cureeency Exchange

        var usDollars = 290.80;
        var saudiRiyal = 40;

        document.write("Total currency in PKR is: " + (usDollars * 10 + saudiRiyal * 25));


        // 10. Maths expressions

        var num = 5;
        document.write(((5 + 5) * 10) / 2);

        // 11. Age Calculator 

        var currentYear = 2016;
        var birthYear = 1992;

        document.write("Current year is: " + currentYear + "<br />");
        document.write("Current year is: " + birthYear  + "<br />");
        document.write("Your age is: " + currentYear % birthYear + "<br />");

        // 12. The Geometrizer: Calculate properties of a circle.

        var pi = 3.142;
        var radius = 20;

      var radiuss = document.write("The radius of a circle: " + radius  + "<br>");
      var circumference = document.write("The circumference is: " + 2 * pi * radius + "<br>");
      var area = document.write("Area of a circle is: " + pi * radius * radius  + "<br>");

      // 13. Lifetime supply Calculator.

      var favSnack = "Kurleez";
      var currentAge = 21;
      var maximumAge = 65;
      var estimateAmount = 2;


      var yearsRemaining = maximumAge - currentAge;
      var daysRemaining = yearsRemaining * 365;
      var perDay = daysRemaining * estimateAmount;

      document.write("Years Remaining: " + yearsRemaining + "<br>");
      document.write("Days Remaining: " + daysRemaining + "<br>");
      document.write("Per Day: " + perDay + "<br>");
     // console.log(perDay);

      document.write("You will need " + perDay + " " + favSnack + " to last you until the ripe old age of " + maximumAge + ".");