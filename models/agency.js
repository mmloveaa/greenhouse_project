'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');

const JWT_SECRET = 'this is my secret. TELL NOBODY. this can be as long as you would like';

var Agency;

var agencySchema = new mongoose.Schema({
  companyname: { type: String, unique: true, required: true },
  position: { type: String,unique: true, required: true },
  image: { type: String, default: "https://cdn0.vox-cdn.com/images/verge/default-avatar.v9899025.gif" },
  experience: { type: Array }
});
