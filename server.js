import express from 'express'
import logger from './middleware/logger.js'
import router from './router.js'
import errorHandler from './middleware/errorHandling.js'

const app = express()
const PORT = 4000

// middleware + router
app.use(express.json())
app.use(logger)
app.use(router)
app.use(errorHandler)

// Catch any other error 
app.use((req, res, _next) => {
  return res.status(404).send('404 - Required endpoint not found!')
})

app.listen(PORT, () => console.log(`🚀 Express is listening on port ${PORT}`))

