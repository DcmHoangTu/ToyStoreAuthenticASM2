var express = require('express');
const ToyModelModel = require('../models/ToyModelModel');
var router = express.Router();

// localhost:3001/toymodel
router.get('/', async(req, res) => {
    var toymodels = await ToyModelModel.find();
    //res.send(students)
    //render ra file view: view/student/index.hbs 
    res.render('toymodel/index', { toymodels : toymodels });
})

router.get('/list', async(req, res) => {
    var toymodels = await ToyModelModel.find();
    res.render('toymodel/list', { toymodels : toymodels, title : 'Toy Models' } )
})

router.get('/detail/:id', async (req, res) => {
    var toymodel = await ToyModelModel.findById(req.params.id)
    //res.send(phone)
    res.render('toymodel/detail', { toymodel : toymodel } )
})

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await ToyModelModel.findByIdAndDelete(id);
    console.log('Delete Toy Model succeed');
    res.redirect('/toymodel');
 })

router.get('/add', (req, res) => {
    res.render('toymodel/add');
 })
 
 router.post('/add', async (req, res) => {
    var toymodel = req.body;
    await ToyModelModel.create(toymodel);
    console.log('Add Toy Model succeed !');
    res.redirect('/toymodel');
 })

 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toymodel = await ToyModelModel.findById(id);
    res.render('toymodel/edit', { toymodel: toymodel });
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toymodel = req.body;
    await ToyModelModel.findByIdAndUpdate(id, toymodel);
    console.log('Update Toy Model succeed !');
    res.redirect('/toymodel');
 })

 router.post('/search', async(req, res) => {
    var keyword = req.body.name;
    var toymodels = await ToyModelModel.find({name: new RegExp(keyword, "i")});
    res.render('toymodel/list', {toymodels : toymodels});

})
router.post('/search1', async(req, res) => {
    var keyword = req.body.name;
    var toymodels = await ToyModelModel.find({name: new RegExp(keyword, "i")});
    res.render('toymodel/index', {toymodels : toymodels});

})

module.exports = router;