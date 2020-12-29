import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('taskapi','postgres','elalo417',{host:'localhost', dialect:'postgres'});

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log(sequelize._attributes);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
