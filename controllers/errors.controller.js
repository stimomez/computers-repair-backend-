const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'fail';

  res.status(statusCode).json({
    status: status,
    error: err.message,
    stack: err.stack,
  });
};

module.exports = { globalErrorHandler };
