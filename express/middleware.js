const express = require("express");
const app = express();
const applyFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Enter Your Age");
  } else if (req.query.age < 18) {
    res.send("You Could Not viist the site......");
  } else {
    next();
  }
};

app.use(applyFilter);

app.get("", (req, res) => {
    res.send("Welcome To The Home Page");
  })

  app
  .get("/about", (req, res) => {
    res.send("Welcome To The About Page");
  })
 app.listen(1200);
