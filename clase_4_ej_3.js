/*3) inserción y actualización de varios registros */
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
  .then(() => crearusuario2())
  .then(() => crearusuario())
  .then(user  => modificar());
 

const crearusuario =()=>{
    User.create({
        firstName: 'Miriam',
        lastName: 'Zarate'}
        
      )};
const crearusuario2 =()=>{
    User.create({
        firstName: 'Miriam1',
        lastName: 'Olson'}
        
      )};      



// ELIMINAR 
const modificar = () =>{
    User.update({ firstName: "Zxxxxx" }, {
        where: {
          lastName: 'Zarate'
        }
      }).then(() => {
        console.log("Done");
      });
    }      
    User.findAll().then(users => {
      console.log("All users:", JSON.stringify(users, null, 4));
    });