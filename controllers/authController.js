class AuthController {
  static async renderHome(req, res) {
    try {
      res.send('renderHome');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderRegister(req, res) {
    try {
      res.send('renderRegister');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async renderLogin(req, res) {
    try {
      res.send('renderLogin');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleRegister(req, res) {
    try {
      res.send('handleRegister');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleLogin(req, res) {
    try {
      res.send('handleLogin');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async handleLogout(req, res) {
    try {
      res.send('handleLogout');
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = AuthController;
