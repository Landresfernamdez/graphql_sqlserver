
var _graphql = require("graphql");
const Institucion = new _graphql.GraphQLObjectType({
  name: 'Institucion',
  description: 'Esto representa la institucion',
  fields: () => {
    return {
      ID: {
        type: _graphql.GraphQLInt
      },
      Nombre: {
        type: _graphql.GraphQLString
      },
      Descripcion: {
        type: _graphql.GraphQLString
      }
    };
  }
});
module.exports= Institucion;