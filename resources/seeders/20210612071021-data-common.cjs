'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.sequelize.query(
      `insert into "Jabatan" (nama_jabatan)
      values ('Wali Dosen'), ('Pengampu'), ('Ketua Jurusan'), ('Ketua Program Studi')`
    )
    await queryInterface.sequelize.query(
      `insert into "Dosen" (nip, nama_dosen)
      values (1001, 'Transmissia Semiawan'),
      (1002, 'Bambang Wisnuadhi'),
      (1003, 'Urip Teguh'),
      (1004, 'Ani Rahmani'),
      (1005, 'Firman Pramudya'),
      (1006, 'Setiadi Rachmaat'),
      (1007, 'Didik Suwito Pribadi'),
      (1008, 'Nurjannah Syakrani'),
      (1009, 'Iwan Awaludin'),
      (1010, 'Ade Chandra Nugraha'),
      (1011, 'Joe Lian Min'),
      (1012, 'Jonner Hutahaean'),
      (1013, 'Ida Suhartini'),
      (1014, 'Irawan'),
      (1015, 'Suprihanto'),
      (1016, 'Eddy Bambang Soewono'),
      (1017, 'Ferry Ferizal'),
      (1018, 'Santi Sundari'),
      (1019, 'Yudi Widhyasana'),
      (1020, 'Yadhi Aditya Permana'),
      (1021, 'Irwan Setiawan'),
      (1022, 'Ghifari Munawar')`
    )
    await queryInterface.sequelize.query(
      `insert into "Menjabat" (nip, id_jabatan)
      values (1001, 2), (1002, 2), (1002, 3), (1003, 2), (1004, 2), (1005, 2),
      (1006, 2), (1007, 2), (1008, 2), (1009, 2), (1010, 2), (1011, 2),
      (1012, 2), (1013, 2), (1014, 2), (1015, 2), (1016, 2), (1017, 2), (1018, 2),
      (1018, 4), (1019, 2), (1020, 2), (1021, 2), (1022, 2), (1022, 4)
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Jurusan" (kode_jurusan, nip)
      values ('15', '1003')
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Program_Studi" (kode_program_studi, kode_jurusan, nip)
      values ('24', '15', '1018'), ('11', '15', '1022')
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Kelas" (kode_kelas, kode_program_studi, tahun, nip)
      values (1703, '24', 2017, '1005'),
      (1803, '24', 2018, '1003'),
      (1903, '24', 2019, '1006'),
      (1904, '24', 2019, '1007'),
      (2003, '24', 2020, '1008'),
      (2004, '24', 2020, '1009'),
      (1801, '11', 2018, '1010'),
      (1802, '11', 2018, '1011'),
      (1901, '11', 2019, '1012'),
      (1902, '11', 2019, '1013'),
      (2001, '11', 2020, '1014'),
      (2002, '11', 2020, '1015')
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Mata_Kuliah" (id, semester, nama_mata_kuliah, sks_teori, sks_praktek, kode_program_studi)
      values ('16TIN2013', 2, 'Aljabar Linear', 3, 0, '24'),
      ('16TIN2043', 2, 'Proyek 1', 0, 3, '24'),
      ('16TIN2054', 2, 'Teknik Pemrograman', 3, 1, '24'),
      ('16TIN2074', 2, 'Struktur Data dan Algoritma', 2, 2, '24'),
      ('16TIN4014', 4, 'APPL1', 3, 1, '24'),
      ('16TIN4024', 4, 'Pemodelan Data', 2, 2, '24'),
      ('16TIN4033', 4, 'Sistem Operasi', 2, 1, '24'),
      ('16TIN4053', 4, 'Proyek 2', 1, 2, '24'),
      ('16TIN6013', 6, 'APPL2', 2, 1, '24'),
      ('16TIN6023', 6, 'Sistem Terdistribusi', 2, 1, '24'),
      ('16TIN6043', 6, 'Pengujian Perangkat Lunak', 2, 1, '24'),
      ('16TIN6063', 6, 'Proyek 3', 1, 2, '24'),
      ('16TIN8012', 8, 'Etika dan Aspek Legal Teknologi Informasi', 2, 0, '24'),
      ('16TIN8032', 8, 'Manajemen Kualitas Terpadu', 0, 4, '24'),
      ('16TIN8044', 8, 'Proyek 5', 0, 4, '24'),
      ('16TKO2053', 2, 'Matematika Diskrit 2', 3, 0, '11'),
      ('16TKO2062', 2, 'Komputasi Kognitif', 0, 3, '11'),
      ('16TKO2032', 2, 'Matematika Terapan 2', 3, 1, '11'),
      ('16TKO2073', 2, 'Proyek Perangkat Lunak 2', 2, 2, '11'),
      ('16TKO4024', 4, 'Pengembangan Perangkat Lunak ', 3, 1, '11'),
      ('16TKO4033', 4, 'Statistika', 2, 2, '11'),
      ('16TKO4014', 4, 'Analisa Perancangan SI', 2, 1, '11'),
      ('16TKO4063', 4, 'Proyek Perangkat Lunak 4', 1, 2, '11'),
      ('16TKO6022', 6, 'PCD', 2, 1, '11'),
      ('16TKO6043', 6, 'Manajemen Proyek', 2, 1, '11'),
      ('16TKO6032', 6, 'Etika Profesi', 2, 1, '11'),
      ('16TIN1043', 1, 'Matematika Terapan 1', 3, 0, '24'),
      ('16TIN1034', 1, 'DDP', 3, 1, '24'),
      ('16TIN1064', 1, 'Kontik', 1, 1, '24'),
      ('16TIN3053', 3, 'Sistem Basis Data', 3, 1, '24'),
      ('16TIN3063', 3, 'PBP', 1, 1, '24'),
      ('16TIN3043', 3, 'Matematika Terapan 2', 1, 1, '24'),
      ('16TIN5054', 5, 'Pengembangan Web', 1, 1, '24'),
      ('16TIN5063', 5, 'Manajemen Proyek Perangkat Lunak', 1, 1, '24'),
      ('16TIN5013', 5, 'Komputasi Numerik', 1, 1, '24'),
      ('16TIN7022', 7, 'PKL 2', 1, 0, '24'),
      ('16TIN7034', 7, 'Proyek 4', 0, 3, '24'),
      ('16TKO1012', 1, 'Pengantar Ilmu Lingkungan', 3, 0, '11'),
      ('16TKO1054', 1, 'DDP', 0, 3, '11'),
      ('16TKO1083', 1, 'Proyek Perangkat Lunak 1', 1, 1, '11'),
      ('16TKO3043', 3, 'PBO ', 3, 1, '11'),
      ('16TKO3024', 3, 'PRPL', 1, 1, '11'),
      ('16TKO3073', 3, 'Proyek Perangkat Lunak 3', 1, 1, '11'),
      ('16TKO5043', 5, 'Komputer Grafik', 1, 1, '11'),
      ('16TKO5063', 5, 'Komunikasi Data dan Jaringan', 1, 1, '11'),
      ('16TKO5073', 5, 'Proyek Perangkat Lunak 5', 1, 1, '11')
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Mahasiswa" (nim, nama, kode_kelas, email, nomor_ponsel, url_foto)
      values 
      (181524001, 'si b', 1803, 'si.b.tif417@polban.ac.id', '08212212121', 'https://id.pinterest.com/pin/280700989263813088/'),
      (191511001, 'si c', 1901, 'si.c.tif417@polban.ac.id', '08212212121', 'https://id.pinterest.com/pin/280700989263813088/'),
      (181524002, 'si m', 1803, 'si.m.tif417@polban.ac.id', '08212212121', 'https://id.pinterest.com/pin/280700989263813088/'),
      (191511003, 'si n', 1901, 'si.n.tif417@polban.ac.id', '08212212121', 'https://id.pinterest.com/pin/280700989263813088/'),
      (181524003, 'si d', 1803, 'si.d.tif417@polban.ac.id', '08212212121', 'https://id.pinterest.com/pin/280700989263813088/'),
      (191511002, 'si f', 1901, 'si.f.tif417@polban.ac.id', '08212212121', 'https://id.pinterest.com/pin/280700989263813088/')
      `
    )
    await queryInterface.sequelize.query(
      `insert into "Perkuliahan" (id_mata_kuliah, tahun_akademik, kode_kelas)
      values ('16TIN2013', 2019, 1803),
      ('16TIN2043', 2019, 1803),
      ('16TIN2054', 2019, 1803),
      ('16TIN2074', 2019, 1803),
      ('16TIN4014', 2020, 1803),
      ('16TIN4024', 2020, 1803),
      ('16TIN4033', 2020, 1803),
      ('16TIN4053', 2020, 1803),
      ('16TIN6013', 2021, 1803),
      ('16TIN6023', 2021, 1803),
      ('16TIN6043', 2021, 1803),
      ('16TIN6063', 2021, 1803),
      ('16TIN1043', 2018, 1803),
      ('16TIN1034', 2018, 1803),
      ('16TIN1064', 2018, 1803),
      ('16TIN3053', 2019, 1803),
      ('16TIN3063', 2019, 1803),
      ('16TIN3043', 2019, 1803),
      ('16TIN5054', 2020, 1803),
      ('16TIN5063', 2020, 1803),
      ('16TIN5013', 2020, 1803),
      ('16TKO2053', 2020, 1901),
      ('16TKO2062', 2020, 1901),
      ('16TKO2032', 2020, 1901),
      ('16TKO2073', 2020, 1901),
      ('16TKO4024', 2021, 1901),
      ('16TKO4033', 2021, 1901),
      ('16TKO4014', 2021, 1901),
      ('16TKO4063', 2021, 1901),
      ('16TKO1012', 2019, 1901),
      ('16TKO1054', 2019, 1901),
      ('16TKO1083', 2019, 1901),
      ('16TKO3043', 2020, 1901),
      ('16TKO3024', 2020, 1901),
      ('16TKO3073', 2020, 1901)
      `
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.sequelize.query(`
      DELETE FROM "Pengajar";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Studi";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Perkuliahan";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Mahasiswa";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Mata_Kuliah";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Kelas";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Program_Studi";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Jurusan";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Menjabat";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Dosen";
    `)
    await queryInterface.sequelize.query(`
      DELETE FROM "Jabatan";
    `)
  }
};
