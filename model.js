const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  profilePicture: {
    data: Buffer,
    contentType: String,
  },
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
});

module.exports = {
  User: mongoose.model("User", userSchema),
  Login: mongoose.model("Login", loginSchema),
};
