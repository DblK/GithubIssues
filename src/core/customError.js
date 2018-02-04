class CustomError extends Error {
  constructor(code, message) {
    super(message);
    Error.captureStackTrace(this, CustomError);

    this.code = code;
  }
}

module.exports = {
  CustomError,
};
