"use strict";

require("reflect-metadata");

require("express-async-errors");

require("./database");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _AppError = _interopRequireDefault(require("./errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.use((err, req, res, next) => {
  if (err instanceof _AppError.default) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }

  next(err);
});
app.listen(3333, () => {
  console.log('Server started!');
});