
import getBtp from '../service/btp.service.js';


/**
 * 
 * @param req : body
 * @param res 
 * @returns 
 */
export async function btp(req, res){
  // Lista di due studenti
  let resp;
  try {
    resp = await getBtp();
  } catch (error) {
    res.status(500).send(error);
  }
  
  return res.status(200).json(resp);
}


export default btp;