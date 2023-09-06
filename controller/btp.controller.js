
import getBtp from '../service/btp.service.js';

import Btp1MZ30 from '../models/btp1mz30.js';
import Btp15ST26 from '../models/btp15st26.js';

const URL_1=process.env.URL_1
const URL_2=process.env.URL_2

/**
 * 
 * @param req : body
 * @param res 
 * @returns 
 */
export async function btp(req, res){
  // Lista di due studenti
  let resp = [];
  try {
    const res1 = await getBtp(Btp1MZ30, URL_1);
    resp.push(res1);
  } catch (error) {
    res.status(500).send(error);
  }
  // --------------------------------------
  try {
    const res2 = await getBtp(Btp15ST26, URL_2);
    resp.push(res2);
  } catch (error) {
    res.status(500).send(error);
  }
  // --------------------------------------
  return res.status(200).json(resp);
}


export default btp;