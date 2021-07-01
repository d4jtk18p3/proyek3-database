import Sequelize from 'sequelize'
import db from '../db'

const User = db.define('User', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nama_grup: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default User
