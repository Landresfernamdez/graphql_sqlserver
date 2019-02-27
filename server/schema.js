"use strict";
var _graphql = require("graphql");
var qInstitucionesFiltro=require('./querys/q_instituciones');
const Schema = new _graphql.GraphQLSchema({
  query: qInstitucionesFiltro
});
module.exports = Schema;
