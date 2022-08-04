// app/service/user.js
const Service = require('egg').Service;

class BlogService extends Service {
  async single(id) {
    const user = await this.app.mysql.get(
      'article', { _id: id }
    );
    return user;
  }
  async many(uid) {
    const user = await this.ctx.db.query(
      'select * from user where uid = ?',
      uid
    );
    return user;
  }
}

module.exports = BlogService;
