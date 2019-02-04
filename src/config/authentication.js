const passportHttp = require("passport-http");

const strategy = new passportHttp.DigestStrategy(
  { qop: "auth" },
  function(username, done) {
    return done(null, {}, "password");
  },
  function(params, done) {
    return done(null, true);
  }
);

module.exports = {
  strategy
};
