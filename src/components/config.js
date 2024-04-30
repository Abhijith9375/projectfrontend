const express = require('express');  // Correct require syntax
const path = require("path");  // Correct spelling and capitalization
const bcrypt = require("bcrypt");  // Correct require syntax

const collection = require("./config");  // Fixed file reference

const app = express();  // Correct initialization

// Middleware to convert data into JSON format
app.use(express.json());  
app.use(express.urlencoded({ extended: false }));  // Fix incorrect parentheses syntax

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Static file setup
app.use(express.static("public"));  // Correct use of static folder

// Route to render login page
app.get("/Login", (req, res) => {
    res.render("login");  // Fix extra parentheses
});

// Route to render signup page
app.get("/Signup", (req, res) => {  // Correct syntax for arrow function
    res.render("signup");  // Fix extra parentheses
});

// Register User
app.post("/signup", async (req, res) => {
    // Prepare data for user registration
    const data = {  // Correct data initialization
        name: req.body.username,
        password: req.body.password
    };

    try {
        const userdata = await collection.insertMany(data);  // Use correct insertMany method
        console.log(userdata);  // Log registered user data
        res.send("User registered successfully");  // Send success response
    } catch (error) {
        console.error(error);  // Handle error cases
        res.status(500).send("Error registering user");  // Send error response
    }
});

// Define server port
const port = 5000   ;

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);  // Correct server message with template literals
});
 