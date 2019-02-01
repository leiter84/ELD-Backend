const diagnosticServiceState = {
  serviceState: "string",
  stateChangeReason: "string",
  stateChangeTime: Date.now()
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
  timestamp: Date.now(),
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
  timestamp: Date.now()
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
