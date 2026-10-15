const express = require("express");
const app = express();

const orders = [
    { id: 101, item: "Laptop", amount: 50000 },
    { id: 102, item: "Mobile", amount: 15000 },
    { id: 103, item: "Tablet", amount: 25000 }
];

const users = [
    { id: 1, name: "Raman", email: "raman@gmail.com" },
    { id: 2, name: "Ajay", email: "ajay@gmail.com" },
    { id: 3, name: "Ramanjay", email: "ramanjay@gmail.com" }
];

const products = [
    { id: 11, name: "Mouse", price: 800 },
    { id: 12, name: "Keyboard", price: 1200 },
    { id: 13, name: "Monitor", price: 7500 }
];

const students = [
    { roll: 101, name: "Ajay", marks: 88 },
    { roll: 102, name: "Raman", marks: 76 },
    { roll: 103, name: "Amu", marks: 92 }
];

const employees = [
    { id: 1, name: "Raman", dept: "HR" },
    { id: 2, name: "Ajay", dept: "IT" },
    { id: 3, name: "Neha", dept: "Finance" }
];

const books = [
    { id: 201, title: "Swift Basics", author: "Apple" },
    { id: 202, title: "Node.js Mastery", author: "Ryan Dahl" }
];

const movies = [
    { id: 1, name: "Inception", rating: 9 },
    { id: 2, name: "Interstellar", rating: 8 }
];

const courses = [
    { id: 101, course: "Web Development", duration: "3 Months" },
    { id: 102, course: "App Development", duration: "4 Months" }
];

const cities = [
    { id: 1, name: "Delhi", population: "2 Cr" },
    { id: 2, name: "Mumbai", population: "1.8 Cr" }
];

const weather = [
    { city: "Delhi", temp: 30, condition: "Sunny" },
    { city: "Kolkata", temp: 28, condition: "Cloudy" }
];


// question 1

app.get("/orders" , (req , res) => {
    res.json(orders)
})

// question 2

app.get("/users" , (req , res) => {
    res.json(users)
})

// question 3 

app.get("/products" , (req ,res) => {
    res.json(products)
})

// question 4

app.get("/students" , (req, res) => {
    res.json(students)
})

// question 5

app.get("/employees", (req , res) => {
    res.json(employees)
})

// question 6

app.get("/books" , (req, res) => {
    res.json(books)
})

// question 7

app.get("/movies" , (req, res) => {
    res.json(movies)
})

// question 8

app.get("/courses" , (req, res) => {
    res.json(courses)
})

// question 9

app.get("/cities" , (req, res) => {
    res.json(cities)
})

// question 10

app.get("/weather" , (req, res) => {
    res.json(weather)
})

// question 11

app.get("/orders/:id" , (req,res) => {
    const id = Number(req.params.id)

    const order = orders.find((o) => o.id === id)

    if (!order){
        return res.status(404).send("order not found");
      }
      res.json(order);
})

// GET 12: User by name
app.get("/users/:name", (req, res) => {
    const name = req.params.name;

    const user = users.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.json(user);
});

// GET 13: Single product by ID
app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);
});

// GET 14: Student by name
app.get("/students/:name", (req, res) => {
    const name = req.params.name;

    const student = students.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (!student) {
        return res.status(404).send("Student not found");
    }

    res.json(student);
});

// GET 15: Employee by ID
app.get("/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    const employee = employees.find((item) => item.id === id);

    if (!employee) {
        return res.status(404).send("Employee not found");
    }

    res.json(employee);
});




















app.listen(4000 , () => {
    console.log("server is running on port 4000");
})