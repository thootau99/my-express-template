const express = require("express")
const swaggerJsdoc = require("swagger-jsdoc")
const { test_router } = require('../router/test.js')

/** @type {express.Express} */
const app = express()

const swaggerSpec = swaggerJsdoc({
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            title: "Express Template Swagger",
            version: "1.0.0",
        },
        "securityDefinitions": {
          "JWT": {
              "type": "apiKey",
              "name": "authorization",
              "in": "header"
          },
        },
        "definitions": {
          "TestObject": {
            "type": "object",
            "properties": {
                "test": { "type": "string" }
            }
          },
        },
    },
    apis: ["router/*.js"]
});

app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.send(swaggerSpec);
});

app.use('/', test_router)

module.exports = { app }