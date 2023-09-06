
import dataValidation from '../middleware/dataValidation.js';
import {
  ultimoPrezzo,
  rendimentoNetto,
  rendimentoTotale,
  cedolaNetto,
  cedolaTotale,
  creditodImposta
} from '../controller/ranking.controller.js';
import express from 'express';
const routerRanking = express.Router();

routerRanking.get('/api/v1/prezzo', 
  ultimoPrezzo
);

routerRanking.get('/api/v1/rendimento', 
  rendimentoNetto,
  rendimentoTotale
);

routerRanking.get('/api/v1/cedola', 
  cedolaNetto,
  cedolaTotale
);

routerRanking.get('/api/v1/creditodimposta', 
  creditodImposta
);


export default routerRanking;
