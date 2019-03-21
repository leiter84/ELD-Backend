const passportHttp = require("passport-http");

const strategy = new passportHttp.DigestStrategy(
  { qop: "auth" },
  function(username, done) {
    if (username) {
      const password = "password";
      const user = {
        username,
        password
      };
      return done(null, user, password);
    }
    return done(null, false);
  }
);

module.exports = {
  strategy
};
