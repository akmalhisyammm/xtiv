const { Post, Profile, Tag, User } = require('../models');

class UserController {
  static async renderUser(req, res) {
    try {
      const profile = await Profile.findOne({ 
        include: {
          model: User,
          include: {
            model: Post,
            include: Tag,
          }
        }, 
        where: { 
          UserId: +req.params.id 
        } 
      });

      res.render('pages/users/profile', { profile, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUpdateUser(req, res) {
    try {
      const profile = await Profile.findOne({ 
        include: User, 
        where: { 
          UserId: +req.params.id 
        } 
      });

      res.render('pages/users/update', { profile, user: req.session.user })
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleUpdateUser(req, res) {
    try {
      await Profile.update(req.body, { where: { UserId: +req.params.id } });

      res.redirect(`/users/${req.params.id}`);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = UserController;
