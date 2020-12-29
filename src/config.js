import dotenv from 'dotenv'
dotenv.config();
export default {
    databaseHost: process.env.DB_HOST,
    databaseUser: process.env.DB_USER,
    databasePassword: process.env.DB_PASS,
    databaseName: process.env.DB_NAME,
}