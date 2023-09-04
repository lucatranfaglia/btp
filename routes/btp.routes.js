
import dataValidation from '../middleware/dataValidation.js';
import btp from '../controller/btp.controller.js';
import express from 'express';
const routerBtp = express.Router();

routerBtp.get('/api/v1/btp', 
  dataValidation,
  btp
);


export default routerBtp;
