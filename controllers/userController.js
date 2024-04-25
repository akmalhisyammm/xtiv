const { Profile } = require('../models');

class UserController {
  static async renderUser(req, res) {
    try {
      const profile = await Profile.findByPk(+req.params.id);

      res.render('pages/users/profile', { profile, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUpdateUser(req, res) {
    try {
      const profile = await Profile.findByPk(+req.params.id);

      res.render('pages/users/update', { profile, user: req.session.user })
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleUpdateUser(req, res) {
    try {
      console.log(req.body);

      res.redirect(`/users/${req.params.id}`);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = UserController;
