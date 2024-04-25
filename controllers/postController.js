const { Post, Tag, User } = require('../models');

class PostController {
  static async renderPosts(req, res) {
    try {
      const posts = await Post.findAll({ 
        include: [
          { model: User },
          { model: Tag },
        ] 
      });

      res.render('pages/posts', { posts, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderCreatePost(req, res) {
    try {
      const tags = await Tag.findAll();

      res.render('pages/posts/create', { tags, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUpdatePost(req, res) {
    try {
      const post = await Post.findByPk(+req.params.id);
      const tags = await Tag.findAll();

      res.render('pages/posts/update', { post, tags, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleCreatePost(req, res) {
    try {
      const { title, content, imgUrl, TagId } = req.body;

      const post = await Post.create({ 
        title, 
        content, 
        imgUrl, 
        UserId: req.session.user.id 
      }, { 
        include: Tag 
      });

      await post.addTags(TagId);

      res.redirect('/posts');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleUpdatePost(req, res) {
    try {
      res.send('handleUpdatePost');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleDeletePost(req, res) {
    try {
      await Post.destroy({ where: { id: +req.params.id } });

      res.redirect('/posts');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = PostController;
