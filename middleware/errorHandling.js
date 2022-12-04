const errorHandler = (error, _req, res, _next) => {
  console.log(`Server side error ----> ${error}`)
  console.log(`Name of error ----> ${error.name}`)
  return res.status(500).json({ message: 'Oops! Something went wrong' })
}

export default errorHandler