const genre = require('../../models/genre');

module.exports = {
    index,
    show
  };
  
  async function index(req, res) {
    try {
      const genresData = await genre.find({}).sort('name').populate('genre').exec();
    res.send(genresData)
  console.log(genresData)
    } catch (error) {
      console.error('Error fetching genres:', error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
  
  async function show(req, res) {
    try {
      const genre = await genre.findById(req.params.id);
      res.json(genre);
    } catch (error) {
      console.error('Error fetching genre:', error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }