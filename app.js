const express = require('express'); 
const bodyParser = require('body-parser');

// Require route files
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects'); 

// Create express application 
const app = express(); 

// Set route for serving static assets
app.use('/static', express.static('public'));

// Set pug has app's templating engine
app.set('view engine', 'pug');

// Use routes for requests to the application 
app.use(mainRoutes);  
app.use('/projects', projectRoutes);

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!')
});