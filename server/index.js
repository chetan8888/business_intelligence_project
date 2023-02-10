const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

// load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Making Build Folder as Public
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/", function (req, res) {
  res.send("Server HomePage");
});

// cors
app.use(cors());

// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Cookie parser
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));

// TODO - db setup, routes
