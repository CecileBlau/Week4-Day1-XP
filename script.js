// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.
// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }//-------------------->ANSWER: The value of a will be 3

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }//-------------------->ANSWER: 0



// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }//-------------------->ANSWER:"hello"



// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }//-------------------->ANSWER:"test"

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);//-------------------->ANSWER:5
// }
// alert(a);
// //-------------------->ANSWER:2




//----------------------------------------- Exercise 2 : Ternary Operator-------------------------------------
// Instructions
// Using the code below :

// function winBattle(){
//     return true;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// experiencePoints()
// // You need to modify the function called experiencePoints()
// // Create a variable called experiencePoints.
// // Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).

// function winBattle(){
//     return true;
// }

// function experiencePoints(){
//     winBattle==true? 10:1
// }


//--------------------------------------------Exercise 3 : Colors------------------------------------------
// Instructions
// Using this array :

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// // Check if this array includes the color “Violet”.


// let check = colors.includes("Violet");

// console.log(check)
// // Write a JavaScript program that displays the colors in the following 
// //order :
// //“1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// // Hint : Use the array methods taught in class.
// colors.forEach((elem, index) => {
//     console.log(` My #${index +1} choice is:` ,elem)
// })





// Exercise 4 : Colors #2
// Instructions
// Using these arrays :

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order :
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.
color.forEach((elem, index) => {
    let newIndex= index + 1
    let para1 = newIndex 
    let para2 =`choice is: ${elem}`;
    if (newIndex==1){
        console.log(`${para1}st ${para2}`)
    }
    else if (newIndex==2){
        console.log(`${para1}nd ${para2}`)
    }
    else if (newIndex==3){
        console.log(`${para1}rd ${para2}`)
    }
    else{
        console.log(`${para1}th ${para2}`)
    }


})




// -----------------------------Exercise 5 : Is It A String ?------------------//
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false



// function isString(type){
//     typeof  type === "string" ? console.log(`IS A STRING`): console.log(`NOT A STRING`)
// }

// isString([1, 2, 4, 0])








// ----------------------------------Exercise 6 : Bank Details-----------------------------
// Instructions
// In this exercise, you have to decide which type of variables you have to use:

// Create a global variable called bankAmount which value is the amount of money currently in your account.
//with anonymous arrow function
// classmates.forEach((element, index, array) => console.log(`${element} is at the index ${index}`))

//classmates.forEach((element) => console.log(`${element}`))


let bankAmount = 10000
let positive = []
let negative = []

let monthlyExpenses = ["+200", "-100", "+146", "+167", "-2900"]

monthlyExpenses.forEach((element) => 

    element.slice(0,1)==="+"? positive += element : negative+=element)






console.log(positive)
console.log(negative)
