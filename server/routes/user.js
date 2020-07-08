const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const uri = "mongodb+srv://Sara-Agha-Alnimer:TMGUY54ZkKH7vne6@moody.96orc.mongodb.net/moody?retryWrites=true&w=majority"
// mongoose.connect(uri /* || "mongodb://localhost/moody "*/,
//   { useNewUrlParser: true,
//   useUnifiedTopology: true }
// );

// const db = mongoose.connection;

const User = require('../models/user')
// const validateInput = require("../../validation/register")

router.post('/signup', (req,res) => {  
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      
      

      //add new user to the db
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });     
});

//login route
router.post("/login",function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email, password }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    //save session inside the browser
    app.use(
  session({
    name: "session-id",
    secret: "ASEAFigthers",
    saveUninitialized: false,
    resave: false,
    store:localStorage.setItem(key,value),
  })
);
const port = process.env.PORT || 5000;
app.use(express.static("public"));
app.post("/login", async (req, res, next) => {
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  let user = await populateData.User.findOne({ email: newUser.email });
  if (!user) {
    return res.send("That email not exists!");
  } else {
    bcrypt.compare(newUser.password, user.password, function (err, result) {
      if (err) {
        return res.send(err);
      } else if (result === true) {
        req.session.user = user;
        res.cookie("user", "user", {
          signed: true,
          maxAge: 1000 * 60 * 60,
        });
        var userInfo = {
          user: user,
          result: result,
        };
        res.status(200).send(userInfo);
        next();
      } else {
        return res.send(result);
      }
    });
  }
});
      console.log(user);
      return res.json({exist : true})
  
    
  });
});




module.exports = router;