const express = require('express')
const { query } = require('express-validator')
const test_router = express.Router()
const { validate } = require('../models/validate')
/**
 * @swagger
 * /health:
 *   get:
 *     tags:
 *       - test
 *     summary: Test if the api is alive
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: string
 */

 test_router.get('/health', express.json(), async (res, req) => {
    req.send("OK")
})

/**
 * @swagger
 * /input:
 *   get:
 *     tags:
 *       - test
 *     summary: Accept one input, and it should be there
 *     parameter:
 *       - in: query
 *         name: input
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: string
 */

 test_router.get('/input', express.json(), validate([
    query('input').isString()
 ]), async (res, req) => {
    req.send(`Your input is ${res.query.input}`)
})

module.exports = { test_router }