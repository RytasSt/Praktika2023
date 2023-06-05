const express = require("express");
const bodyParser = require("body-parser");
const mealsRouter = require("./routes/mealsRoutes");
const menuRouter = require("./routes/menuRoutes");
const userRouter = require("./routes/userRoutes");
const cors = require('cors');
const cookieParser = require("cookie-parser")



const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use("/meals", mealsRouter);
app.use("/menu", menuRouter);
app.use("/users", userRouter);




module.exports = app;