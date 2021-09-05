/*2) inserción y eliminación de un registro.*/
const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }) 
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,  modelName: 'user'});
                        
sequelize.sync()
  .then(() => crearusuario())
  .then(user => eliminar(user));
 

const crearusuario =()=>{
    User.create({
        firstName: 'Susana',
        lastName: 'Pereyra'}
        
      )};

        
       



// ELIMINAR 
const eliminar = user =>{
  User.destroy({
    where: {
      firstName: 'Susana',
      lastName: 'Pereyra'
           
    }
  }).then(() => {
    console.log("Elimine Registro");
  });}
  
  
