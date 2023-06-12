// 1.
var stdData = [];

// 2.
var stdData = new Array();

// 3. 
var stringsArray = ["Apple","Mango","Banana","Grapes"];

// 4.
var numberArray = [1,2,3,4,5,6];

// 5.
var booleanArray = [true, false, true];

// 6.
var mixedArray = [1, "Apple", true , "Banana", 4, false];

// 7.
var qualificationArray = ["SSC", "HSC", "BSc", "BS", "B.Com", "MS", "M-Phil", "PHD"];
console.log(qualificationArray);

// 8.

var studentArray = ["Score of Michael is:", 320 , "Score of John is:", 230 , "Score of Tony is:", 480];
var totalMarks = 500;
console.log(studentArray);
var marksObtained = document.write(studentArray[0]+ " " + studentArray[1]+ " " + "Percentage is:" + " " + studentArray[1] / totalMarks * 100 + "%" + "<br />");
var marksObtained = document.write(studentArray[2]+ " " + studentArray[3]+ " " + "Percentage is:" + " " + studentArray[3] / totalMarks * 100 + "%" + "<br />");
var marksObtained = document.write(studentArray[4]+ " " + studentArray[5]+ " " + "Percentage is:" + " " + studentArray[5] / totalMarks * 100 + "%" + "<br />");
console.log(marksObtained);

// 9.


// 10. Array sort Method.
var stdScore = [ 320, 230 ,480, 120];
document.write("Score of Students:" + stdScore + "<br />");
document.write("Score of Students:" + stdScore.sort());

// 11.
var cities = ["Karachi", "Lahore", "Islamabad", "Multan", "Peshawar" ];
var selectedCities = "<br />" + cities[1]  + " "  + cities[3];
document.write(selectedCities);

// 12.
var arr = ["This", "is", "my", "Cat"];
document.write("<br />" + arr.join(" "));

