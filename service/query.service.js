import { Op } from "sequelize";

/**
 * 
 * @param {Model} Model 
 * @param {array of string} attributes 
 * @param {object of object} where 
 * @param {array of string} order 
 */
export async function findAll(Model,  where={}, orders=['createdAt', 'DESC']){

  try {
    return Model.findAll({
      where,
      order:[orders]
    });
  } catch (error) {
    throw error;
  }
}


/**
 * Save
 * @param {object} Model 
 * @param {object} data 
 * @returns 
 */
export async function saveBtp(Model, data) {
  try {
    const save = await Model.create(data);
    return save
  } catch (error) {
    throw error;   
  }
}


export default findAll;