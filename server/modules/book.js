
var _graphql = require("graphql");
const Libro = new _graphql.GraphQLObjectType({
  name: 'Libro',
  description: 'This represents the books',
  fields: () => {
    return {
      id: {
        type: _graphql.GraphQLInt
      },
      titulo: {
        type: _graphql.GraphQLString
      },
      autor: {
        type: _graphql.GraphQLString
      },
      ano: {
        type: _graphql.GraphQLString
      },
      numeroInscripcion: {
        type: _graphql.GraphQLString
      },
      numeroClasificacion: {
        type: _graphql.GraphQLString
      },
      orden: {
        type: _graphql.GraphQLString
      },
      bib: {
        type: _graphql.GraphQLString
      },
      precio: {
        type: _graphql.GraphQLString
      },
      procedencia: {
        type: _graphql.GraphQLString
      },
      observaciones: {
        type: _graphql.GraphQLString
      },
      tipo: {
        type: _graphql.GraphQLString
      }
    };
  }
});
module.exports= Libro;