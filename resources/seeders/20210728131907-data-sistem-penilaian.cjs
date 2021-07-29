'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seeds commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
	*/
	await queryInterface.sequelize.query(
      `insert into "Tugas" (id, nama_tugas, status_progress, status_durasi, status_skala,
        status_catatan, status_lampiran, id_perkuliahan, nip)
      values (1, 'W1 - Polymorphism', true, true, true, true, true, 5, '196810141993032000'),
      (2, 'W2 - Design pattern', true, true, true, true, true, 5, '196810141993032000')
      `
    )
	await queryInterface.sequelize.query(
      `insert into "Subtugas" (nama_subtugas, tenggat, status_subtugas, id_tugas, id_studi)
      values ('Another Type of Employee','2021-07-30T12:00:00Z',false,1,1),
      ('Painting Shapes','2021-07-30T17:00:00Z',false,1,1),
      ('Polymorphic Sorting','2021-07-31T12:00:00Z',false,1,1),
      ('Searching and Sorting an Integer List','2021-07-31T17:00:00Z',false,1,1),
      ('Timing Searching and Sorting Algorithms','2021-08-01T12:00:00Z',false,1,1),
      ('Coloring a Moveable Circle','2021-08-01T17:00:00Z',false,1,1),
      ('Speed Control','2021-08-01T17:00:00Z',false,1,1)
	  )
	 
	await queryInterface.sequelize.query(`ALTER SEQUENCE "Tugas_id_seq" RESTART WITH ${dataTugas + 1}`)
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Subtugas_id_seq" RESTART WITH ${dataSubtugas + 1}`)
	 
	 
	 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
