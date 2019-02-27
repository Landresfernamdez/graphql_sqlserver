const Express = require("express");
const GraphHTTP =require('express-graphql');
const Schema =require('./schema');
const cors=require('cors');
//Config 
const APP_PORT=3000;
const app=Express();
//Allow cross-origin requests
app.use(cors());
app.use('/graphql',GraphHTTP({
    schema:Schema,
    pretty:true,
    graphiql:true
}));
app.listen(APP_PORT,()=>{
    console.log('App listenig in the port '+APP_PORT);
})




