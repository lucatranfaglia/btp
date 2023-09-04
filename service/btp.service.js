import * as dotenv from 'dotenv';
dotenv.config();


import axios from 'axios';
import HTMLParser from 'fast-html-parser';

const URL_1=process.env.URL_1
const URL_2=process.env.URL_2


/**
 * Lista di max 2 studenti con un punteggio (valore nella colonna points) superiore a 50 e inferiore a 450
 * @param data 
 * @returns 2 studenti
 */
export async function getBtp(){  
  let data1;
  try {
    const urls1 =  await getURL(URL_1);
    data1 =  urls1.data;
  } catch (error) {
    throw new Error(error);
  }
  // --------------------------------------
  let data2;
  try {
    data2 =  await getHTML(data1);    
  } catch (error) {
    throw new Error(error);
  }

  return data2;
} 


async function getURL(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    throw error;   
  }
}

async function getHTML(data) {
  // let $ = cheerio.load(data);
  // const scheda_box = $('.scheda_box');
  // const list = scheda_box[0].childNodes;
  // console.log('list: ', list  );
  // return list.map(element => {
  //   console.log('element: ', element.text());
  //   console.log('titolo: ', element.scheda_box_titolo.text());
  //   console.log('value: ', element.scheda_box_val_sigla.text());
  //   return {'titolo': element.scheda_box_titolo, 'value': element.scheda_box_val_sigla};
  // })


  let dataNodes = HTMLParser.parse(data).querySelectorAll('.scheda_box');
  console.log('dataNodes: ', dataNodes.length);
  let resp =[]
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
      value = node.querySelector('.scheda_box_val_big').text.trim();
    }
    else if(node && node.querySelector('.scheda_box_val_scadenza')){
      value = node.querySelector('.scheda_box_val_scadenza').text.trim();
    }
    
    console.log('titolo: ', titolo);
    console.log('value: ', value);
    resp.push({titolo, value});
  }
  console.log('resp: ', resp);

  return resp;
}

export default getBtp;