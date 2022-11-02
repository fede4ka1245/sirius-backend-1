import Sequelize from 'sequelize';
import { getDatabase } from './getDatabase.js';

const database = getDatabase();

export const Rot = database.define('rot', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  rot: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  usage: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
