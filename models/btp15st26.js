'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

class Btp15ST26 extends Model {}
Btp15ST26.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  Isin: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Sigla: {
    allowNull: false,
    type: DataTypes.STRING
  },
  UltimoPrezzo: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  RendimentoNetto: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  CedolaNetta: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  RendimentoTotale: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  EmissioneScadenza: {
    allowNull: false,
    type: DataTypes.STRING
  },
  AnniResidui: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  CedolaLorda: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  CreditoDimposta: {
    allowNull: false,
    type: DataTypes.FLOAT
  }
}, {
  sequelize,
  modelName: 'Btp15ST26',
});

export default Btp15ST26;