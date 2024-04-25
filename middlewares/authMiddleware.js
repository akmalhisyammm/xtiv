class AuthMiddleware {
  static isAuthenticated(req, res, next) {
    if (!req.session.user) {
      return res.redirect('/');
    }

    next();
  }

  static isUnauthenticated(req, res, next) {
    if (req.session.user?.role === 'admin') {
      return res.redirect('/dashboard');
    }

    if (req.session.user?.role === 'member') {
      return res.redirect('/posts');
    }

    next();
  }

  static isRoleAdmin(req, res, next) {
    if (req.session.user?.role === 'member') {
      return res.redirect('/posts');
    }
  
    next();
  }

  static isRoleMember(req, res, next) {
    if (req.session.user?.role === 'admin') {
      return res.redirect('/dashboard');
    }
  
    next();
  }
}


module.exports = AuthMiddleware;