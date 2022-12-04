import axios from 'axios'

// GET REGION POPULATION SUMMARY ----

const getRegionPop = async (req, res, next) => {
  // Requested Region
  const reqRegion = req.params.id

  try {
    // Get data from rest countries API
    const { data } = await axios.get(`https://restcountries.com/v3.1/region/${reqRegion}`)

    // return data for testing
    return res.status(200).json(data)
  } catch (error){
    console.log('ERROR----> ', error)
    next(error)
  }
}

export default getRegionPop