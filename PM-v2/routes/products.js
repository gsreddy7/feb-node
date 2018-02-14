/**
 * 
 */

var express = require('express')
var router = express.Router()

let Product = require('../model/Product');

router.get('/', function(req, res, next) {
	// Load all products ( Non - Blocking IO )
	Product.find(function(err, docs) {
		if (err) {
			next(err);
		}
		res.render('product-list', {
			products : docs
		});
	});
})
router.get('/new-form', function(req, res, next) {
	res.render('product-form');
})
router.post('/save-product', function(req, res, next) {
	let productData = req.body;
	let product = new Product(productData);
	product.save(function(err, savedProduct) {
		res.redirect('/products');
	});
})



module.exports = router