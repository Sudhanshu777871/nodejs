const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const complePath = path.join(__dirname, "pages");
app.use(express.static(complePath));
app.listen(7800);