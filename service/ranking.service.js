import * as dotenv from 'dotenv';
dotenv.config();

import Btps from '../models/btp.js';
import findAll from './query.service.js'


/**
 * Lista di max 2 studenti con un punteggio (valore nella colonna points) superiore a 50 e inferiore a 450
 * @param data 
 * @returns 2 studenti
 */
export async function getUltimoPrezzo(){  
  let where, order;
  try {
    return  await findAll(Btps, where, order);
  } catch (error) {
    throw error;
  }
} 


export default getUltimoPrezzo;