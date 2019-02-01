const express = require("express");
const EldCtrl = require("./src/controllers/ELDCtrl");

// Initialize Express server with predefined settings
const app = express();
app.set("json spaces", 4);

app.get(
  "/diagnostic_service_state",
  EldCtrl.getDiagnosticServiceState
);

app.get("/esn", EldCtrl.getEsn);
app.get("/gps", EldCtrl.getGps);
app.get("/hours_of_service", EldCtrl.getHoursOfService);
app.get("/odometer", EldCtrl.getOdometer);
app.get("/vin", EldCtrl.getOdometer);

// Error handling
app.use((err, req, res, next) => {
  res.status(405).json(err);
  next();
});

const port = process.env.PORT || 1337;

/* eslint-disable no-console */
app.listen(port, () => console.log("Listening on port " + port));
/* eslint-enable */
