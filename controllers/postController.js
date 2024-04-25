class PostController {
  static async renderPosts(req, res) {
    try {
      res.send('renderPosts');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderCreatePost(req, res) {
    try {
      res.send('renderCreatePost');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUpdatePost(req, res) {
    try {
      res.send('renderUpdatePost');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleCreatePost(req, res) {
    try {
      res.send('handleCreatePost');
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
      res.send('handleDeletePost');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = PostController;
