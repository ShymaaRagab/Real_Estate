const express = require("express");
const createError = require("http-errors");
const dotenv = require("dotenv").config();
const cors = require("cors");

  

const app = express();
app.use(express.json());



app.use('/uploads', express.static('uploads'));  


//intialize db
require("./initDB")();

const PORT = process.env.PORT || 8000;


app.use(cors());
const adminRoute = require("./routes/admin.routes");
app.use("/admin", adminRoute);

const userRoute = require("./routes/users.routes");
app.use("/users", userRoute);

const propertyRoute = require("./routes/property.routes");
app.use("/properties", propertyRoute);
//property
//404 handler
app.use((req, res, next) => {
  next(createError(404, "not found"));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
app.listen(PORT, () => {
  console.log("helllo server....");
});
