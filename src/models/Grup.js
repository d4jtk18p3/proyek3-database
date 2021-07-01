import Sequelize from 'sequelize'
import db from '../db'

const Grup = db.define('Grup', {
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  }
})

export default Grup
