'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.addColumn(
    'Studi',
    'nilai_akhir', {
        type: Sequelize.DOUBLE,
        allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Studi', 'nilai_akhir');
  }
};
