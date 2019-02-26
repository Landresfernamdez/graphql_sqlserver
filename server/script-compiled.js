"use strict";

var _graphql = require("graphql");

const DB = require('./db');

const Libros = new _graphql.GraphQLObjectType({
  name: 'Libros',
  description: 'This represents the books',
  fields: () => {
    return {
      id: {
        type: _graphql.GraphQLInt,

        resolve(libro) {
          libro.id;
        }

      },
      titulo: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.titulo;
        }

      },
      autor: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.autor;
        }

      },
      ano: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.ano;
        }

      },
      numeroInscripcion: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.numeroInscripcion;
        }

      },
      numeroClasificacion: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.numeroClasificacion;
        }

      },
      orden: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.orden;
        }

      },
      bib: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.bib;
        }

      },
      precio: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.precio;
        }

      },
      procedencia: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.procedencia;
        }

      },
      observaciones: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.observaciones;
        }

      },
      tipo: {
        type: _graphql.GraphQLString,

        resolve(libro) {
          libro.tipo;
        }

      }
    };
  }
}); //Creating the QR

const Query = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      libros: {
        type: new _graphql.GraphQLList(Libros),
        args: {
          id: _graphql.GraphQLInt
        },

        resolve(root, args) {
          return DB.models.Libros.findAll({
            where: args
          });
        }

      }
    };
  }
}); //Creating the schema

const Schema = new _graphql.GraphQLSchema({
  query: Query
});
module.exports = Schema;
