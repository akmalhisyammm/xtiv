const bcrypt = require('bcrypt');
const { Profile, User, sequelize } = require('../models');

class AuthController {
  static async renderHome(req, res) {
    try {
      res.render('pages/auth', { user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderRegister(req, res) {
    try {
      res.render('pages/auth/register', { user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderLogin(req, res) {
    try {
      res.render('pages/auth/login', { user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleRegister(req, res) {
    try {
      const { firstName, lastName, gender, dateOfBirth, phone, address, username, email, password } = req.body;
      
      await sequelize.transaction(async (t) => {
        const user = await User.create({ username, email, password }, { transaction: t });

        await Profile.create({
          firstName,
          lastName,
          gender,
          dateOfBirth,
          phone,
          address,
          UserId: user.id,
        }, {
          transaction: t,
        });
      });

      res.redirect('/login');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleLogin(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      
      if (!user) {
        return res.redirect('/login?message=Invalid email or password');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.redirect('/login?message=Invalid email or password');
      }

      delete user.password;

      req.session.user = user;

      if (req.session.user.role === 'admin') {
        res.redirect('/dashboard');
      } else {
        res.redirect('/posts');
      }
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static handleLogout(req, res) {
    try {
      req.session.destroy();

      res.redirect('/');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = AuthController;
