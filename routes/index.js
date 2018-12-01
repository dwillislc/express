const express = require('express'); 
const router = express.Router(); 

// Index route to handle requests to "Home" 
router.get('/', (req, res) => {
	res.render('index'); 
});

// Route to handle requests to "About"
router.get('/about', (req, res) => {
	res.render('about'); 
});

module.exports = router;