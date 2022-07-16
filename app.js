//Question-1
// function date(){
// var date = new Date();
// document.write(date);
// }
// date()

//Q-2
// function greet(firstName,lastName){
// var fullName = firstName + " "+ lastName;
//  return fullName;
// }
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var greets = greet(firstName,lastName)
// console.log(greets);

//Q-3
// function add(firstNum,secondNum){
//     var add = firstNum + secondNum;
//     return add;
// }
// var firstNum = parseInt(prompt("Enter your first number:"))
// var secondNum = parseInt(prompt("Enter your second number:"))
// var addNum = add(firstNum,secondNum)
// console.log(addNum);

// Q-4
// function calculator(num1,num2,opt){
// if(opt === "+"){
//     var add = num1 + num2;
//     console.log("Addition of "+num1 + " + "+num2+ " is "+add);
// }else if(opt === "-"){
//     var sub = num1 - num2;
//     console.log("Subtraction of "+num1 + " - "+num2+ " is "+sub);
// }else if(opt === "*"){
//     var mul = num1 * num2;
//     console.log("Multiplication of "+num1 + " * "+num2+ " is "+mul);
// }else if(opt === "/"){
//     var div = num1 / num2;
//     console.log("Division of "+num1 + " / "+num2+ " is "+div);
// }else if(opt === "%"){
//     var remainder = num1 % num2;
//     console.log("Subtraction of "+num1 + " % "+num2+ " is "+remainder);
// }else{
//     console.log("Invalid number try again!")
// }
// }
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var opt = prompt("Enter operator (+,-,*,/,%)");
// calculator(num1,num2,opt);

//Q-5
// function square(){
// var sqr = sqrNum * sqrNum;
// return sqr;
// // console.log("Square of the number "+sqrNum+" is " +sqr);
// }
// var sqrNum = +prompt("Enter the number");
// var sqrArgu = square(sqrNum);
// console.log("Square of the number "+sqrNum+" is "+sqrArgu);

//Q-6
// function factorial(num){
// var fact = 1;
// for(var i=num; i >= 1; i--){
//     fact = fact * i;
// }
// console.log(fact)
// }
// var num = +prompt("Enter the number");
// factorial(num)

//Q-7
// function counting(startNum,endNum){
// for(var i=startNum; i <= endNum; i++){
//     console.log(i)
// }
// }
// var startNum = +prompt("Enter the start number")
// var endNum = +prompt("Enter the end number");
// counting(startNum,endNum)

//Q-9
// function areaOfRectangle(width,height){
//     var area = width * height;
//     return area
// }
// var width = +prompt("Enter the width")
// var height = +prompt("Enter the height")
// var areaRec = areaOfRectangle(width,height)
// console.log("Area of the Rectangle: "+areaRec)

//Q-10
// function palindrome(userInput){
// var palindrome = userInput.split("").reverse().join("");
// if(userInput === palindrome){
//     console.log("Given word is palindrome")
// }else{
//     console.log("Not a palindrome")
// }
// }
// var userInput = prompt("Enter the word");
// palindrome(userInput);

//Q-11
//a slice method
// var str = "the quick brown fox";
// var str2 = str.slice(0,1).toUpperCase()+str.slice(1,3)+" "+str.slice(4,5).toUpperCase()+str.slice(5,9)+" "+str.slice(10,11).toUpperCase()+str.slice(11,15)+" "+str.slice(16,17).toUpperCase()+str.slice(17);
// console.log(str2);

//b charAt and for loop(function)
// function capitilize(str){
// var arr = str.split(" ");
// for(var i = 0; i < arr.length; i++){
//     arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
// }
// var str2 = arr.join(" ")
// console.log(str2);
// }
// // var str = "the quick brown fox";
// var str = prompt("Enter the string for capilitize")
// capitilize(str);

//Q-12
// function longestWord(str){
// var word = str.split(" ")
// var longestWord = 0;
// var word2 = null;
// for (var i = 0; i < word.length; i++){
//     if(word[i].length > longestWord){
//         longestWord = word[i].length;
//         word2 = word[i];
//     }
// }
// return word2;
// }
// var str = "web development tutorial";
// console.log(longestWord(str));

//Q-13
// function occurenceOfALetter(str){
// var letter = prompt("Enter the letter");
// var counter = 0;
// for(var i = 0; i < str.length; i++){
//     if(str[i] === letter){
//         counter = counter + 1;
//     }
// }
// console.log(`${str} => ${letter}=> ${counter}`)
// }
// var str = prompt("Enter the string");
// occurenceOfALetter(str);

//Q-14
//Circumference of circle
// function calcCircumference(radiusOFCir){
// var CircumferenceOfCircle = Math.round(2*3.14*radiusOFCir);
// console.log(CircumferenceOfCircle);
// }
// var radiusOFCir = +prompt("Enter the radius of the Circumference");
// calcCircumference(radiusOFCir);

//Area of circle
function calcArea(radius){
var areaOfCircle = Math.round(3.14 * (radius*radius));
console.log(areaOfCircle);
}
var radius = +prompt("Enter the radius of the circle");
calcArea(radius);







