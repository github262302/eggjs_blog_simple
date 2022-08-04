'use strict';

const Controller = require('egg').Controller;

class FileController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async show() {
    const { ctx } = this;
    ctx.body = 'hi, show' + ctx.params.id;
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

module.exports = FileController;
