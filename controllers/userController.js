class UserController {
  static async renderUsers(req, res) {
    try {
      res.send('renderUsers');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUser(req, res) {
    try {
      res.send('renderUser');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderUpdateUser(req, res) {
    try {
      res.send('renderUpdateUser');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleUpdateUser(req, res) {
    try {
      res.send('handleUpdateUser');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = UserController;
