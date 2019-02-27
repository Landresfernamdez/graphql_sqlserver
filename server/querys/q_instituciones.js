var _graphql = require("graphql");
const DB = require('../db');
const Institucion=require('../modules/institucion');
 //Creating the QR
const qInstitucionesFiltro = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      institucion: {
        type: new _graphql.GraphQLList(Institucion),
        args: {
          ID: { type: _graphql.GraphQLInt },
          Nombre: { type: _graphql.GraphQLString },
          Descripcion: { type: _graphql.GraphQLString }
        },
        resolve(root, args) {
          return DB.models.Institucion.findAll({
            where: args
          });
        }
      }
    };
  }
}); 
module.exports=qInstitucionesFiltro;