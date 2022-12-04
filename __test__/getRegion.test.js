import request from 'supertest'
import app from '../server.js'

describe('GET /asia', () => {

  test('should respond with a 200 status code, total population should be defined, most populated country in Asia should be China', async () => {
    const response = await request(app).get('/asia')
    expect(response.statusCode).toBe(200)
    expect(response.body.totalRegionPop).toBeDefined()
    expect(response.body.mostPopCountry).toContain('China')
  })

  describe('GET /asiaa (mispelled region)', () => {
    test('should respond with 404 status code', async () => {
      const response = await request(app).get('/asiaa')
      expect(response.statusCode).toBe(404)
    })
  })

})