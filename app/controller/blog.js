'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async show() {
    const { ctx } = this;
    ctx.body = await ctx.service.blog.single(ctx.params.id);
  }
  async create() {
    const { ctx } = this;
    ctx.body = 'hi, create';
  }
  async update() {
    const { ctx } = this;
    ctx.body = 'hi, update';
  }
  async destroy() {
    const { ctx } = this;
    ctx.body = 'hi, destroy';
  }
}

module.exports = BlogController;
