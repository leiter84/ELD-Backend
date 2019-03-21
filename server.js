const express = require("express");
const passport = require("passport");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./api/swagger.json");
const AuthConfig = require("./src/config/authentication");
const EldCtrl = require("./src/controllers/ELDCtrl");

// Initialize Express server with predefined settings
const app = express();
app.set("json spaces", 4);

// Swagger middleware
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Passport Authentication Middleware
passport.use(AuthConfig.strategy);
app.use(passport.initialize());
app.use(passport.session());
const digestAuth = passport.authenticate("digest", {
  session: false
});

// Routing
app.get(
  "/api/eld/diagnostic_service_state",
  digestAuth,
  EldCtrl.getDiagnosticServiceState
);
app.get("/api/eld/esn", digestAuth, EldCtrl.getEsn);
app.get("/api/eld/gps", digestAuth, EldCtrl.getGps);
app.get(
  "/api/eld/hours_of_service",
  digestAuth,
  EldCtrl.getHoursOfService
);
app.get("/api/eld/odometer", digestAuth, EldCtrl.getOdometer);
app.get("/api/eld/vin", digestAuth, EldCtrl.getVin);
app.get("/api/eld/chassisId", digestAuth, EldCtrl.getChassis);

// Error handling
app.use((err, req, res, next) => {
  res.status(405).json(err);
  next();
});

const port = process.env.PORT || 1337;

/* eslint-disable no-console */
app.listen(port, () => console.log("Listening on port " + port));
/* eslint-enable */
