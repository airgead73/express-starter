const mongoose = require('mongoose');
const { isEmail } = require('validator')
const bcrypt = require('bcryptjs');
const { JWT_SECRET, JWT_EXP} = require('../config/env');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Provide an appropriately formatted email.'],
    unique: [true, 'User already exists.'],
    trim: true,
    lowercase: true,
    validate: [isEmail, 'Please, enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Provide a password.'],
    trim: true,
    minlength: [5, 'Password should be between 5 and 15 characters'],
    maxlength: [100, 'Password should be between 5 and 15 characters'],
    select: false
  },
  slug: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }  
});

// UserSchema.post('save', function(doc, next) {

//   console.log('new user was created and saved', doc);

//   next();

// });

// Hash password
UserSchema.pre('save', async function(next) {

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();

});

UserSchema.statics.login = async function(credentials, res) {

  const user = await this.findOne({ email: credentials.email }).select('password');

  if(!user) {
    return res
      .status(401)
      .json({
        success: false,
        messages: [{ 
          authentication: 'Incorrect email/password combination'
        }]
      });

   }

   const auth = await bcrypt.compare(credentials.password, user.password);

   if(!auth) {
    return res
      .status(401)
      .json({
        success: false,
        messages: [{ 
          authentication: 'Incorrect email/password combination'
        }]
      });
   }

   return user;

}

// //Encrypt password
// UserSchema.pre('save', async function(next) {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Sign JWT and return
// UserSchema.methods.getSignedJwtToken = function() {
//   return jwt.sign({ id: this.id }, JWT_SECRET, {
//     expiresIn: JWT_EXP
//   });
// }

// // Match user-entered password with db value
// UserSchema.methods.matchPassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// }

module.exports = mongoose.model('User', UserSchema);