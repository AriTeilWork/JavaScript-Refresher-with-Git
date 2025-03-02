function calculateArea(radius) {
    const PI = 3.14159;
    console.log(`Area: ${PI * radius * radius}`);
}

function compareNumbers(a, b) {
    console.log(a > b ? `${a} is greater` : `${b} is greater`);
}

calculateArea(5);
compareNumbers(10, 7);

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const filtered = numbers.filter(num => num > 2);
console.log(filtered);
