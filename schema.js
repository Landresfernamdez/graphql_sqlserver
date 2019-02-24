"use strict";
var _graphql = require("graphql");
var qBooksFiltro=require('./querys/q_books');
const Schema = new _graphql.GraphQLSchema({
  query: qBooksFiltro
});
module.exports = Schema;
