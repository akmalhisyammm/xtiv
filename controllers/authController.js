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
      const messages = req.query.message?.split(',') || [];

      res.render('pages/auth/register', { messages, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderLogin(req, res) {
    try {
      const message = req.query.message || '';

      res.render('pages/auth/login', { message, user: req.session.user });
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

      if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
        const message = error.errors.map((err) => err.message).join();
        return res.redirect(`/register?message=${message}`);
      }

      res.send(error.message);
    }
  }

  static async handleLogin(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      const errorMessage = 'Invalid email or password';
      
      if (!user) {
        return res.redirect(`/login?message=${errorMessage}`);
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.redirect(`/login?message=${errorMessage}`);
      }

      delete user.password;

      req.session.user = user;

      res.redirect(req.session.user.role === 'admin' ? '/dashboard' : '/posts');
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
