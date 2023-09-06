import * as dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';
import HTMLParser from 'fast-html-parser';

import {removeCharacterSpecial, capitalizeFirstLetter} from '../utils/functions.js';
import { saveBtp } from '../service/query.service.js';


/**
 * Lista di max 2 studenti con un punteggio (valore nella colonna points) superiore a 50 e inferiore a 450
 * @param data 
 * @returns 2 studenti
 */
export async function getBtp(Model, url){  
  let dataUrl;
  try {
    const urls1 =  await getURL(url);
    dataUrl =  urls1.data;
  } catch (error) {
    throw error;
  }
  // --------------------------------------
  let dataHtml;
  try {
    dataHtml =  await getHTML(dataUrl);    
  } catch (error) {
    throw error;
  }
  // --------------------------------------
  let saveData;
  try {
    saveData =  await saveBtp(Model, dataHtml);    
  } catch (error) {
    throw error;
  }

  return saveData;
} 


/**
 * 
 * @param {string} url 
 * @returns 
 */
async function getURL(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    throw error;   
  }
}

/**
 * Ottengo i dati dal HTML
 * @param {string} data 
 * @returns 
 */
async function getHTML(data) {
  let dataNodes = HTMLParser.parse(data).querySelectorAll('.scheda_box');
  console.log('dataNodes: ', dataNodes.length);
  let resp ={};
  for (let index = 0; index < dataNodes.length; index++) {
    const node = dataNodes[index];
    const titolo =  node.querySelector('.scheda_box_titolo') ? node.querySelector('.scheda_box_titolo').text.trim() : null;
    let value = null;
    if(node && node.querySelector('.scheda_box_val_sigla')){
      value =  node.querySelector('.scheda_box_val_sigla').text.trim();
    }
    else if(node && node.querySelector('.scheda_box_val_small')){
      value =  node.querySelector('.scheda_box_val_small').text.trim();
    }
    else if(node && node.querySelector('.scheda_box_val_big')){
      const valueTemp1 = node.querySelector('.scheda_box_val_big').text.trim();
      const valueTemp2 = removeCharacterSpecial(valueTemp1);
      const valueTemp3 = valueTemp2.replaceAll(`,`, '.');

      value = parseFloat(valueTemp3);
    }
    else if(node && node.querySelector('.scheda_box_val_scadenza')){
      value = node.querySelector('.scheda_box_val_scadenza').text;
    }
    // -------------------------------------------
    let titolo1;
    try {
      titolo1 = capitalizeFirstLetter(titolo);      
    } catch (error) {
      throw error;
    }
    // -------------------------------------------
    let titolo2;
    try {
      titolo2 = removeCharacterSpecial(titolo1);    
    } catch (error) {
      throw error;
    }
    resp[titolo2] = value;
  }
  console.log('resp: ', resp);

  return resp;
}



export default getBtp;