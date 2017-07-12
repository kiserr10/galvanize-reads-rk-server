const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) =>{
	queries.getAllBooks().then(books =>{
		res.json(books);
	});
});


module.exports = router;
