const Sequelize = require('sequelize');
const sequelize = new Sequelize('DBPermisos','sa', '12345', {
  host: 'localhost',
  dialect:'mssql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Or you can simply use a connection uri
//const sequelize = new Sequelize('mssql://user:sa:12345/Books');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  const Institucion= sequelize.define('Institucion',{
    ID:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement:true
    },
    Nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Descripcion: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },{timestamps:false,tableName:'Institucion'});

Institucion.findAll().then(institucion => {
  console.log(institucion)
})

module.exports = sequelize;