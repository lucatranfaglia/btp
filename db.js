import * as dotenv from 'dotenv';
dotenv.config();

import Sequelize from 'sequelize';

// create the connection to database
export const sequelize = new Sequelize(    
  process.env.DB_NAME ? process.env.DB_NAME : 'FinanceBtps',
  process.env.DB_USER ? process.env.DB_USER : 'root' ,
  process.env.DB_PASSWORD ? process.env.DB_PASSWORD : 'root',
  {
    host: process.env.DB_HOST ? process.env.DB_HOST : 'localhost',
    dialect: process.env.DB_DIALECT ? process.env.DB_DIALECT : "mysql",
    port: process.env.DB_PORT ? process.env.DB_PORT : 8889,
    pool: {
      max: 5,
      min: 1,
      acquire: 30000,
      idle: 10000
    }
  }
);

export default sequelize;