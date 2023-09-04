
/**
 * Validazione dei parametri
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const dataValidation = (req, res, next) => {
  if(!req){
    return res.sendStatus(403);
  }
  return next();
}

export default dataValidation;