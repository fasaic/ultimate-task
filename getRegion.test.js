import request from 'supertest'
import app from './server.js'

describe("GET /asia", () => {

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/asia")
    expect(response.statusCode).toBe(200)
  })
})