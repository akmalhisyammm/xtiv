const { Post, PostTag, Tag } = require('../models');

class PostController {
  static async renderPosts(req, res) {
    try {
      const posts = await Post.getPostsByTagWithSort(req.query.tag || '', req.query.sort || 'DESC');
      const tags = await Tag.findAll();

      res.render('pages/posts', { posts, tags, currentTag: req.query.tag, user: req.session.user });
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

      const post = await Post.create({ title, content, imgUrl, UserId: req.session.user.id });

      await post.addTags(TagId);

      res.redirect('/posts');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleUpdatePost(req, res) {
    try {
      const { title, content, imgUrl, TagId } = req.body;

      const post = await Post.update(
        { title, content, imgUrl, UserId: req.session.user.id },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      await post.setTags(TagId);

      res.redirect('/posts');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleDeletePost(req, res) {
    try {
      await PostTag.destroy({ where: { PostId: +req.params.id } });
      await Post.destroy({ where: { id: +req.params.id } });

      res.redirect(`/users/${req.session.user.id}`);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = PostController;
