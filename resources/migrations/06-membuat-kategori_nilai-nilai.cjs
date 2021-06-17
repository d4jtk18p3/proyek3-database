'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Kategori_Nilai', {
      parent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nama_kategori: {
        type: Sequelize.STRING,
      },
      id_perkuliahan: {
        type: Sequelize.INTEGER,
        references:{
          model:'Perkuliahan',
          key:'id',
        },
        allowNull: false,
      },
      nip: {
        type: Sequelize.STRING,
        references:{
          model:'Dosen',
          key:'nip',
        },
      },
      kode_kategori: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true,
      },
      bobot_nilai: {
        type: Sequelize.DOUBLE,
        allowNull: false
      }
    });
    await queryInterface.createTable('Nilai', {
      kode_kategori: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:'Kategori_Nilai',
          key:'kode_kategori',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_studi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Studi',
          key:'id',
        },
        onUpdate: 'cascade',
        onDelete: 'set null'
      },
      nilai: {
        type: Sequelize.DOUBLE
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Nilai');
    await queryInterface.dropTable('Kategori_Nilai');
  }
};
