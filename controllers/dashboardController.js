const { col, fn } = require('sequelize');
const { Post, PostTag, Profile, Tag, User } = require('../models');

class DashboardController {
  static async renderDashboard(req, res) {
    try {
      const genderReports = await Profile.findAll({
        attributes: ['gender', [fn('COUNT', col('gender')), 'totalGender']],
        group: 'gender',
      });

      res.render('pages/dashboard', { genderReports, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUsers(req, res) {
    try {
      const users = await User.findAll();

      res.render('pages/dashboard/users', { users, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderPosts(req, res) {
    try {
      const posts = await Post.findAll();

      res.render('pages/dashboard/posts', { posts, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderTags(req, res) {
    try {
      const tags = await Tag.findAll();

      res.render('pages/dashboard/tags', { tags, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderCreateTag(req, res) {
    try {
      res.render('pages/dashboard/tags/create');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUpdateTag(req, res) {
    try {
      res.send('pages/dashboard/tags/update');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleCreateTag(req, res) {
    try {
      await Tag.create(req.body);

      res.redirect('/dashboard/tags');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleUpdateTag(req, res) {
    try {
      res.send('handleUpdateTag');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleDeleteUser(req, res) {
    try {
      res.send('handleDeleteUser');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleDeletePost(req, res) {
    try {
      res.send('handleDeletePost');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleDeleteTag(req, res) {
    try {
      await PostTag.destroy({ where: { TagId: +req.params.id } });
      await Tag.destroy({ where: { id: +req.params.id } });

      res.redirect('/dashboard/tags');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = DashboardController;
