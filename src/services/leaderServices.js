import { Op } from 'sequelize';
import models from '../models';

const {
  Leadership
} = models;
/**
 * @exports
 * @class LeadersService
 */
class LeadersService {
  /**
     * create new user
     * @static createAccomodations
     * @param {object} newLeaders
     * @memberof LeadersService
     * @returns {object} data
     */
  static create(newLeaders) {
    return Leadership.create(newLeaders);
  }

  static getAllLeaders() {
    return Leadership.findAll({
      attributes: ['names', 'title', 'facebookAcc', 'twitterAcc', 'moreOn'],
    },);
  }

  static findById(modelId) {
    return Leadership.findOne({
      where: { id: modelId },
    });
  }

  static deleteById(leaderId) {
    return Leadership.destroy({ where: { id: leaderId } });
  }

  static updateAtt(set, prop) {
    return Leadership.update(set, {
      where: prop,
    });
  }
}
export default LeadersService;
