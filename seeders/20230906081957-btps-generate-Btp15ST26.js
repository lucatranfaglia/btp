'use strict';

import Btp1MZ30 from '../models/btp1mz30.js';
import Btp15ST26 from '../models/btp15st26.js';
import dataBTP15ST26 from '../dataBTP-15ST26.json' assert { type: "json" };

export async function up(queryInterface, Sequelize) {
  try {
    await queryInterface.bulkInsert('Btp15ST26s', dataBTP15ST26, {});      
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Btp15ST26s', null, {});
}
