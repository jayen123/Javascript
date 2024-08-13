// Task-01: write a programme to check if a number is positive,negative or zero, and log the result to the console
const taskOne = (num) => {
    if (num < 0) {
        console.log("negative Number");
    } else if (num === 0) {
        console.log("Zero");
    } else {
        console.log("Positive Number");
    }
    return
}
taskOne(0);

// Task-02: write a programme to check if a person is eligible to vote (age >= 18) and log the result to the console
const taskTwo = (age) => {
    if (age >= 18) {
        console.log("You are eligible for vote");
    } else {
        console.log("you are under age!");

    }
}
taskTwo(19)
// Task-03: write a programme to find the largest numbers using nested if-else statements
const taskThree = (num, num2, num3) => {
    let result;
    if (num > num2) {
        if (num > num3) {
            result = (`${num} is the biggest number`)
        }
    }
    if (num2 > num) {
        if (num2 > num3) {
            result = (`${num2} is the biggest number`)
        }
    }
    if (num3 > num) {
        if (num3 > num2) {
            result = (`${num3} is the biggest number`)
        }
    }

    return result
}
console.log(taskThree(110, 232, 33));

// Task-4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const taskFour = (day) => {
    switch (true) {
        case day === 1:
            console.log("Mon");
            break;
        case day === 2:
            console.log("Tue");
            break;
        case day === 3:
            console.log("Wed");
            break;
        case day === 4:
            console.log("Thu");
            break;
        case day === 5:
            console.log("Fri");
            break;
        case day === 6:
            console.log("Sat");
            break;
        case day === 7:
            console.log("Sun");
            break;
        default:
            console.log("Must be enter 1-7 range");
            break;
    }
    return day
}
console.log(taskFour(5));

// Task-5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
const taskFive = (score) => {
    switch (true) {
        case score <= 100 && score >= 80:
            console.log("A+");
            break;
        case score <= 79 && score >= 70:
            console.log("A");
            break;
        case score <= 69 && score >= 60:
            console.log("A-");
            break;
        case score <= 59 && score >= 50:
            console.log("B");
            break;
        case score <= 49 && score >= 40:
            console.log("C");
            break;
        case score <= 39 && score >= 33:
            console.log("D");
            break;
        default:
            console.log("Range Number 100 - 33");
            break;
    }
    return score
}
console.log(taskFive(33));

// Task-6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const taskSix = (num) => {
    return num % 2 === 0 ? `number is even ${num}` : `number is Odd ${num}`
}
console.log(taskSix(6));

// Task-7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const taskSeven = (year) => {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(`${year} is leap year`);
    } else {
        console.log(`${year} is not leap year`);
    }


    return year

}
console.log(taskSeven(2024));
