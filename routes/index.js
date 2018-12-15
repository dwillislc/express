const express = require('express'); 
const router = express.Router(); 
const { data } = require('../data/data.json'); 
const { projects } = data; 


// Index route to handle requests to "Home" 
router.get('/', (req, res) => {	
	res.render('index', {projects}); 
});

// Route to handle requests to "About"
router.get('/about', (req, res) => {
	res.render('about'); 
});

module.exports = router;