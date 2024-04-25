class DashboardController {
  static async renderDashboard(req, res) {
    try {
      res.send('renderDashboard');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUsers(req, res) {
    try {
      res.send('renderUsers');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderPosts(req, res) {
    try {
      res.send('renderPosts');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderTags(req, res) {
    try {
      res.send('renderTags');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderCreateTag(req, res) {
    try {
      res.send('renderCreateTag');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUpdateTag(req, res) {
    try {
      res.send('renderUpdateTag');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleCreateTag(req, res) {
    try {
      res.send('handleCreateTag');
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
      res.send('handleDeleteTag');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = DashboardController;
