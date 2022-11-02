const supertest = require('supertest')
const { app: server} = require('../server/express.js')
describe("test user features", () => {
    it('check health', async () => {
        const response = await supertest(server).get('/health')
        expect(response.status).toBe(200)
    })
    it('access a not exists path', async () => {
        const response = await supertest(server).get('/this_path_does_not_exists')
        expect(response.status).toBe(404)
    })
    it('check input with fail result', async () => {
        const response = await supertest(server).get('/input')
        expect(response.status).toBe(500)
    })
    it('check input with success result', async () => {
        const response = await supertest(server).get('/input')
            .query({
                input: 'test'
            })
        expect(response.status).toBe(200)
    })
})