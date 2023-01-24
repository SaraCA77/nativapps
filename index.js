const PatientRoute = require("./src/route/patientRoute.js");
const express = require( "express");

let app = express();

app.disable("X-powered-by");
app.use(express.json({ limit: "60mb" }));
app.use(
  express.urlencoded({
    extended: false,
    limit: "60mb",
  })
);

let port = process.env.PORT || 3000;
app.use("/nativapps/v1.0", PatientRoute);
app.get("/health", (_req, res) =>
  res.status(200).send({
    message: "Welcome to this API (GET)",
  })
);

app.listen(port, () => {
  console.log("Se ejecuta en el puerto " + port || 3000);
});

module.exports = class db {
};
