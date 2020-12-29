import {Sequelize} from 'sequelize';
import config from './config';
const sequelize = new Sequelize(config.databaseName,config.databaseUser,config.databasePassword,{host:config.databaseHost, dialect:'postgres',});

(async ()=>{

    try {
        // console.log(config.databaseUser);
        await sequelize.authenticate();
        console.log(sequelize._attributes);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
export default sequelize;