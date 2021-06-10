import Sequelize from 'sequelize'
import db from '../db'

const Dosen = db.define('Dosen', {
  nip: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  nama_dosen: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  id_jabatan: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

export default Dosen
