const Data = require("../../data/index");

const getDiagnosticServiceState = (request, response) => {
  response.status(200).json(Data.diagnosticServiceState);
};

const getEsn = (request, response) => {
  response.status(200).json(Data.esn);
};

const getGps = (request, response) => {
  response.status(200).json(Data.gps);
};

const getHoursOfService = (request, response) => {
  response.status(200).json(Data.hoursOfService);
};

const getOdometer = (request, response) => {
  response.status(200).json(Data.odometer);
};

const getVin = (request, response) => {
  response.status(200).json(Data.vin);
};

module.exports = {
  getDiagnosticServiceState,
  getEsn,
  getGps,
  getHoursOfService,
  getOdometer,
  getVin
};
