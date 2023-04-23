export const isAuthorized = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

export const isNotAuthorized = (req, res, next) => {
  if (req.user) {
    res.redirect("/dashboard");
  } else {
    next();
  }
};
