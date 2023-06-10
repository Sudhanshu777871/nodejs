const express = require("express");
const app = express();
const applyMiddleware = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Enter your age");
  } else if (req.query.age < 18) {
    res.send("You Could Not Visit the site");
  } else {
    next();
  }
};
app.use(applyMiddleware);
app.get("", (req, res) => res.send("Hello This is Home Page"));

app.listen(5600);





