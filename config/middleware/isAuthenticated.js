// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
    if (req.user) { //if user is logged in
      return next(); //continue with the request to the restricted route
    }
    return res.redirect("/"); //if user isn't logged in, redirect them
  };
  