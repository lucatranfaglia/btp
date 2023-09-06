
import {
  getUltimoPrezzo
} from '../service/ranking.service.js';

/**
 * 
 * @param req : body
 * @param res 
 * @returns 
 */
export async function ultimoPrezzo(req, res){
  // Lista di due studenti
  try {
    const resp = await getUltimoPrezzo();
    return res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
}
/**
 * 
 * @param req : body
 * @param res 
 * @returns 
 */
export async function rendimentoNetto(req, res){
  // Lista di due studenti
  try {
    const resp = await getUltimoPrezzo();
    return res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
}
/**
 * 
 * @param req : body
 * @param res 
 * @returns 
 */
export async function rendimentoTotale(req, res){
  // Lista di due studenti
  try {
    const resp = await getUltimoPrezzo();
    return res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
}
/**
 * 
 * @param req : body
 * @param res 
 * @returns 
 */
export async function cedolaNetto(req, res){
  // Lista di due studenti
  try {
    const resp = await getUltimoPrezzo();
    return res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
}
/**
 * 
 * @param req : body
 * @param res 
 * @returns 
 */
export async function cedolaTotale(req, res){
  // Lista di due studenti
  try {
    const resp = await getUltimoPrezzo();
    return res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
}
/**
 * 
 * @param req : body
 * @param res 
 * @returns 
 */
export async function creditodImposta(req, res){
  // Lista di due studenti
  try {
    const resp = await getUltimoPrezzo();
    return res.status(200).json(resp);
  } catch (error) {
    res.status(500).send(error);
  }
}


export default ultimoPrezzo;