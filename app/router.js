'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.resources('blog', '/api/blog', controller.blog);
  router.resources('file', '/api/file', controller.file);
};
