const { app: server } = require('./server/express.js')
/** @type {number} */
const port = process.env.PORT_SERVER ? parseInt(process.env.PORT_SERVER) : 8080

server.listen(port, () => {
    console.log(`This express server is listening on ${port}`)
})