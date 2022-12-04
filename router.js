import express from 'express'
import getRegionPop from './controller/regionController.js'

const router = express.Router()

router.route('/').get((_req, res) => res.status(200).send('API is running 🎉 What is a region\'s total population and its most populated country? Find out by inputting a region name at the end of the URL ex.(http://localhost:4000/asia) 🗺'))
router.route('/:id').get(getRegionPop)

export default router