const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../models/Auth");

// exports.register = (req, res) => {
//   const { name, username, password } = req.body;
//   bcrypt.hash(password, 10, (err, hash) => {
//     if (err) throw err;
//     Auth.create(name, username, hash, (err, result) => {
//       if (err) throw err;
//       res.status(201).send("User registered");
//     });
//   });
// };

exports.login = (req, res) => {
  const { username, password } = req.body;
  Auth.login(username, password, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(400).send("User not found");
    }
    // no need to check password

    // generate token
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  });
};
