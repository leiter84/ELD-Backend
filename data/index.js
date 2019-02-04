const now = new Date();

const diagnosticServiceState = {
  serviceState: "string",
  stateChangeReason: "string",
  stateChangeTime: now.toISOString()
};

const esn = {
  deviceId: "string",
  productId: 1
};

const gps = {
  lat: 1,
  long: 2,
  speedMph: 3,
  heading: 4,
  accuracyFeet: 5,
  timestamp: now.toISOString(),
  ignition: false
};

const hoursOfService = {
  gps,
  diagnosticServiceState: "InService",
  vin: "string",
  odometerMiles: 1,
  engineHours: 2
};

const odometer = {
  miles: 1,
  sourceName: "string",
  sourceType: "Accumulator",
  timestamp: now.toISOString()
};

const vin = {
  vin: "string"
};

module.exports = {
  diagnosticServiceState,
  esn,
  gps,
  hoursOfService,
  odometer,
  vin
};
