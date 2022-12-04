import axios from 'axios'

// GET REGION POPULATION SUMMARY ----
const getRegionPop = async (req, res, next) => {
  // Requested Region
  const reqRegion = req.params.id

  try {
    // Get data from rest countries API
    const { data } = await axios.get(`https://restcountries.com/v3.1/region/${reqRegion}`)
    const regionCountries = data.map(country => {
      return {
        name: country.name.common,
        population: country.population,
      }
    })

    // Calculation for total population of the region
    const totalPop = regionCountries.reduce((prev, current) => {
      return prev + current.population
    }, 0)

    // Calcualtion for most populated country of the region
    const mostPop = regionCountries.reduce((prev, current) =>  (prev.population > current.population) ? prev : current)

    // Input as response
    const regionPop = {
      totalRegionPop: totalPop,
      mostPopCountry: mostPop.name,
    }

    // return data
    return res.status(200).json(regionPop)
  } catch (error){
    console.log('ERROR----> ', error)
    next(error)
  }
}

export default getRegionPop