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




class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2022);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());

const user = {
    name: "John Doe",
    email: "john@example.com",
    address: {
        city: "New York",
        country: "USA"
    }
};

const { name, email, address: { city, country } } = user;
console.log(name, email, city, country);

const updatedUser = { ...user, email: "newemail@example.com" };
console.log(updatedUser);


document.getElementById("submitButton").addEventListener("click", function() {
    const inputValue = document.getElementById("inputField").value;
    document.getElementById("output").textContent = inputValue;
});
