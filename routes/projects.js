const express = require('express'); 
const router = express.Router(); 
const { data } = require('../data/data.json'); 
const { projects } = data; 

router.get('/', (req, res) => {
	res.send({
		data	
	});	
}); 


// Handle requests to each project ID
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const project = projects[id];	
	
	const title = project.project_name; 
	const { description } = project; 
	 
	const { live_link } = project; 
	const { github_link } = project; 
	const { image_urls } = project; 
	const { technologies } = project;

	const templateData = { title, description, live_link, github_link, image_urls, technologies }
 
	res.render('project', templateData); 

	
});

module.exports = router;