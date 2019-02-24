var _graphql = require("graphql");
const DB = require('../db');
const Libro=require('../modules/book');
 //Creating the QR
const qBooksFiltro = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      libros: {
        type: new _graphql.GraphQLList(Libro),
        args: {
          id: { type: _graphql.GraphQLInt },
          titulo: { type: _graphql.GraphQLString },
          autor: { type: _graphql.GraphQLString },
          ano: { type: _graphql.GraphQLString, },
          numeroInscripcion: { type: _graphql.GraphQLString, },
          numeroClasificacion: { type: _graphql.GraphQLString, },
          orden: { type: _graphql.GraphQLString, },
          bib: { type: _graphql.GraphQLString, },
          precio: { type: _graphql.GraphQLString, },
          procedencia: { type: _graphql.GraphQLString, },
          observaciones: { type: _graphql.GraphQLString, },
          tipo: { type: _graphql.GraphQLString }
        },
        resolve(root, args) {
          return DB.models.Libros.findAll({
            where: args
          });
        }
      }
    };
  }
}); 
module.exports=qBooksFiltro;