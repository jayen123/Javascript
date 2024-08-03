//Even or Odd Function Script:
function evenOddChecker(num) {
    if (num % 2 === 0) {
        console.log(`Even Number is ${num}`);
        return
    } else {
        console.log(`Odd Number is ${num}`);
    }
    return
}

evenOddChecker(6)
//- Square Calculation Function Script:
function squareNumber(num) {
    return console.log(num * num);
}
squareNumber(5)
//Concatenation Function Script:
function maximumNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`maximum number is ${num1}`);
    } else if (num2 > num1) {
        console.log(`maximum number is ${num2}`);
    }
    return
}

maximumNumber(4, 3)

function stringConcatenate(str1, str2) {
    console.log(str1 + str2);
    console.log(`This is string 1 ${str1} and this is string 2 ${str2}`);
    return
}
stringConcatenate("Jayen", "Hasan")

// Sum Calculation Arrow Function Script:

const sumCalculation = (num1, num2) => {
    return console.log(num1 + num2);
}
sumCalculation(5, 3)

const specificCharacter = (str) => {
    return console.log(str.includes("@"));
}

specificCharacter("Hasan1@gmail");

const defaultParameter = (fname, lname = "Hasan") => {
    return console.log(`${fname} : ${lname}`);
}
defaultParameter("Jayen")

const greetingMessage = (username, age = 20) => {
    return console.log(`${username} is just logged in your age ${age}`);
}
greetingMessage("Hasan")

// 
