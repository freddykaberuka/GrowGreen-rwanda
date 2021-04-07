import { Op } from 'sequelize';
import models from '../models';

const {
  Blogs,
} = models;
/**
 * @exports
 * @class BlogsService
 */
class BlogsService {
  /**
     * create new user
     * @static createBlogs
     * @param {object} newBlogs
     * @memberof BlogsService
     * @returns {object} data
     */
  static create(newBlogs) {
    return Blogs.create(newBlogs);
  }

  static updateAtt(set, prop) {
    return Blogs.update(set, {
      where: prop,
    });
  }

  static getBlogs() {
    return Blogs.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
  }

  /**
     * Find a User in storage using login credentials.
     * @param {*} prop HTTP request
     * @returns {*} JSON data
     */
  static findByProp(prop) {
    return Blogs.findAll({
      where: prop,
      attributes: {
        exclude: ['updatedAt', 'createdAt'],
      },
    });
  }

  static deleteBlog(modelId) {
    return Blogs.destroy({ where: { id: modelId } });
  }

  static findByBlogId(prop) {
    return Blogs.findAll({
      where: prop,
      attributes: {
        include: ['title', 'content', 'conclusion', 'createdAt'],
      },
    });
  }

  static findWithoutId(ids) {
    return Blogs.findAll({
      where: {
        [Op.not]: { id: ids }
      }
    });
  }
}
export default BlogsService;
