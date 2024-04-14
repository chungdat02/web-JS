const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
// const bodyCookie = require("body-cookie");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
routes(app);

//connect database Mongodb
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connect Successfull! 🍭🍭");
  })
  .catch((err) => {
    console.log(`Connect Failed:${err} `);
  });

app.listen(port, () => {
  console.log(`Server is running in port: https://localhost:${port}`);
});
