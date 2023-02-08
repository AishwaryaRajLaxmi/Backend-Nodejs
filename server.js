//firstly we have to require express js
const express = require("express");
const app = express();
//set middleware which will send data into json format
 app.use(express.json());
//db connection
const dbconnection = require("./database/dbconnection");
dbconnection.connect();

const webroute = require("./routes/userroutes");
//register routers
app.use("/api/v1/users", webroute);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}..`);
});
