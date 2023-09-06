'use strict';

import Btp1MZ30 from '../models/btp1mz30.js';
import Btp15ST26 from '../models/btp15st26.js';
import dataBTP1MZ30 from '../dataBTP-1MZ30.json' assert { type: "json" };

export async function up(queryInterface, Sequelize) {   

  try {
    await queryInterface.bulkInsert('Btp1MZ30s', dataBTP1MZ30, {});      
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Btp1MZ30s', null, {});
}
