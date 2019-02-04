const express = require("express");
const passport = require("passport");
const AuthConfig = require("./src/config/authentication");
const EldCtrl = require("./src/controllers/ELDCtrl");

// Initialize Express server with predefined settings
const app = express();
app.set("json spaces", 4);

// Passport Authentication Middleware
passport.use(AuthConfig.strategy);
app.use(passport.initialize());
//app.use(passport.authenticate("digest", { session: false }));

const router = express.Router();
router.get(
  "/diagnostic_service_state",
  EldCtrl.getDiagnosticServiceState
);
router.get("/esn", EldCtrl.getEsn);
router.get("/gps", EldCtrl.getGps);
router.get("/hours_of_service", EldCtrl.getHoursOfService);
router.get("/odometer", EldCtrl.getOdometer);
router.get("/vin", EldCtrl.getVin);

app.use("/api/eld", router);

// Error handling
app.use((err, req, res, next) => {
  res.status(405).json(err);
  next();
});

const port = process.env.PORT || 1337;

/* eslint-disable no-console */
app.listen(port, () => console.log("Listening on port " + port));
/* eslint-enable */
