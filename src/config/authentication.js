const passportHttp = require("passport-http");

const strategy = new passportHttp.BasicStrategy(function(
  username,
  password,
  done
) {
  if (username && password) {
    return done(null, username);
  }
  return done(null, false);
});

module.exports = {
  strategy
};
