import Sequelize from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

export const getDatabase = () => new Sequelize(process.env.DATABASE_NAME, 'root', process.env.DATABASE_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
});
