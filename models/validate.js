const { validationResult, ValidationChain } = require('express-validator')
/**
 * 
 * @param {Array<ValidationChain} validations 
 * @returns 
 */
const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
    await validation.run(req);
  }
  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    return `${location}[${param}]: ${msg} value: ${value}`;
  };
    const errors = validationResult(req).formatWith(errorFormatter);
    if (errors.isEmpty()) {
      return next();
    }
    const apiError = new Error("Field", "400", JSON.stringify(errors.array()), true)
    next(apiError)
  };
};

module.exports = { validate }