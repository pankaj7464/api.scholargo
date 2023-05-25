const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const cors = require("cors")
require("dotenv").config();
const connect = require("./utils/Connect");
const { login, logout } = require("./controller/authentication");
const adminRoute = require('./routes/adminRoute')
const scholarshipRoute = require('./routes/scholarshipRoute')
const organisationRoute = require('./routes/organisationRoute')
const userRoute = require('./routes/userRoute')
const server = express();


// middleware setup
server.use(
  session({
    secret: 'love',
    resave: false,
    saveUninitialized: false
  })
);
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// MongoDB connections
connect()
// Route services
// server.use("/api/scholarships",)
server.use("/api/admin",adminRoute);
server.use("/api/scholarship",scholarshipRoute);
server.use("/api/organisation",organisationRoute);
server.use("/api/user",userRoute);
server.get("/logout",logout );
server.post("/login",login );


// default Routes
server.get('/login', (req, res) => {
  res.status(401).json({ message: "You are unauthorised" })
});
server.get('/invalid', (req , res) => {
  res.status(401).json({ message: "Invalid Credencials" })
});
server.get("/", (req, res) => {
  res.send("You are at Home")
})


// server listening
server.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT} link : http://localhost:${process.env.PORT}`)
})
