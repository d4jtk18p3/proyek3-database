import Sequelize from 'sequelize'
import db from '../db'

const User = db.define('User', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  }
})

export default User
