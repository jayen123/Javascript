const num = [1, 2, 3, 4, 5]
console.log(num);

console.log(num[0]);
console.log(num[num.length - 1]);

num.push(6)
console.log(num);

num.pop()
console.log(num);

num.shift()
console.log(num);

num.unshift(1)
console.log(num);

const num2 = num.map((item) => {
    return item * 2
})

console.log(num2);


const num3 = num.filter((item) => {
    return item % 2 == 0;
})

console.log(num3);


const num4 = num.reduce((total, values) => {
    return total + values
})
console.log(num4);

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    console.log(element);
}

const twoDimensionalArray = [[1, 2, 3, 4,], [5, 6, 7, 8, 9,]];
console.log(twoDimensionalArray);
console.log(twoDimensionalArray[0][1]);