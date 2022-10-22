const passport = require("passport");

const auth = passport.authenticate("jwt", { session: false });

export default auth;
