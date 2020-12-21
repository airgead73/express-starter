const jwt = require('jsonwebtoken');
const asyncHandler = require('./handleAsync');
const User = require('../models/User');
const { ISDEV, JWT_SECRET } = require('../config/env');