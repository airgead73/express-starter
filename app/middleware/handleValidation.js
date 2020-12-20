const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const validationRules = (method) => {

  console.log('validation rules');

  switch(method) {
    case 'createUser':
      return [
        body('name', 'Name is required.').not().isEmpty().trim().escape(),
        body('email', 'Enter a valid email.').isEmail().normalizeEmail().custom(async (value, {req}) => {
          let user = await User.findOne({ email: value });
          if(user) {
            throw new Error('User already exists.')
          }
          return true;
        }),
        body('password', 'Password should more than 5 characters and less than 17 characters.').isLength({ min: 6 , max: 16 }),
        body('password_confirm').custom((value, {req}) => {
          if(value !== req.body.password) {
            throw new Error('Password confirmation does not match.')
          }
          return true;
        }) 
      ];
      break; 
    case 'signinUser':
      return [
        body('email', 'Enter valid email.').isEmail().normalizeEmail(),
        body('password', 'Enter a valid password.').isLength({ min: 6 , max: 16 })
      ];
      break;
    case 'createExpense': 
      return [
        body('amount', 'Provide amount.').not().isEmpty().isNumeric(),
        body('frequency').custom((value, {req}) => {
          const frequency = value || (req.query).frequency;
          if(!frequency) {
            throw new Error('Provide appropriate frequency.')
          }
          return true;
        }).escape(),
        body('category', 'Provide category.').not().isEmpty().escape(),
        body('notes', 'Notes should be shorter than 500 characters.').isLength({ max: 500}).trim().custom((value, {req}) => {
          const isInvalid = value.includes('<script>');
          if(isInvalid) {
            throw new Error('Provide appropriate notes.')
          }
          return true;
        }),
        body('name', 'Name should be shorter than 50 characters.').isLength({ max: 50}).trim().escape(),
        body('date_pay_day', 'Day should be number').optional().isEmpty().isNumeric(),
        body('date_pay_month', 'Month should be number').optional().isEmpty().isNumeric(),
        body('date_pay_year', 'Year should be number').optional().isEmpty().isNumeric()                 
      ];
      break;   
    case 'createDebt':
      return [
        body('category', 'Provide a category').not().isEmpty().escape(),
        body('balance', 'Provide a balance.').not().isEmpty().isNumeric(),
        body('balance_date').not().isEmpty(),
        body('name', 'Names should be shorter than 50 characters.').isLength({ max: 500}).trim().custom((value, {req}) => {
          const isInvalid = value.includes('<script>');
          if(isInvalid) {
            throw new Error('Provide appropriate notes.')
          }
          return true;
        }),  
        body('notes', 'Notes should be shorter than 500 characters.').optional().isLength({ max: 500}).trim().custom((value, {req}) => {
          const isInvalid = value.includes('<script>');
          if(isInvalid) {
            throw new Error('Provide appropriate notes.')
          }
          return true;
        }),           
      ]  
  }
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    res.locals.validation_fail = false;
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push(err.msg));
  res.locals.error_arr = extractedErrors;
  res.locals.validation_fail = true;
  return next();
}

module.exports = {
  validationRules,
  validate
}