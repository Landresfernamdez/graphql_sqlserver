const Sequelize = require('sequelize');
const sequelize = new Sequelize('Books', 'sa', '12345', {
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


  const Books = sequelize.define('Libros', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement:true
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: true
    },
    autor: {
      type: Sequelize.STRING,
      allowNull: true
    },
    ano: {
      type: Sequelize.STRING,
      allowNull: true
    },
    numeroInscripcion: {
      type: Sequelize.STRING,
      allowNull: true
    },
    numeroClasificacion: {
      type: Sequelize.STRING,
      allowNull: true
    },
    orden: {
      type: Sequelize.STRING,
      allowNull: true
    },
    bib: {
      type: Sequelize.STRING,
      allowNull: true
    },
    precio: {
      type: Sequelize.STRING,
      allowNull: true
    },
    procedencia: {
      type: Sequelize.STRING,
      allowNull: true
    },
    observaciones: {
      type: Sequelize.STRING,
      allowNull: true
    },
    tipo: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: true,
      DefaultValue: 'N',
    }
  },{timestamps:false});






 /* Books.findAll().then(books => {
    console.log(books)
  })*/

  module.exports = sequelize;