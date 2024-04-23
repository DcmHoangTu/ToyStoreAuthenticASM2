var express = require('express');
var router = express.Router();
var ClassifyModel = require('../models/classifyModel');

router.get('/', async (req, res) => {
   var classify = await ClassifyModel.find({});
   res.render('classify/index', {classify });
})

router.get('/add', (req, res) => {
   res.render('classify/add');
})

router.post('/add', async (req, res) => {
   var classify = req.body;
   await ClassifyModel.create(classify);
   res.redirect('/classify');
})


router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var classify = await ClassifyModel.findById(id);
   res.render('classify/edit', { classify });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var classify = req.body;
   try {
      //SQL: UPDATE countrys SET A = B WHERE id = 'id'
      await ClassifyModel.findByIdAndUpdate(id, classify);
      console.log('update succeed !');
   } catch (err) {
      console.log('update failed. Error: ' + err);
   }
   res.redirect('/classify');
})

module.exports = router;