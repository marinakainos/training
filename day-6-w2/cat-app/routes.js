const express = require('express');
const catsService = require('./catsService');

const router = express.Router();

let cats = [
    {
        name: "jonesy",
        breed: "orange"
    },
    {
        name: "jim",
        breed: "tabby"
    }
]

router.get('/cats', (req, res) => {
    res.render("main", {
        catsList: catsService.getCatsList(cats)
    })
});

router.get('/cats/add', (req, res) => {
    res.render('catForm', { cats })
});

router.post('/submit', (req, res) => {
    let newCat = req.body;
    cats.push(newCat);
    res.send(catsService.getCatsList(cats));
})

router.get('/cats/:name', (req, res) => {
    const catName = req.params.name;
    const breed = cats.find(c => c.name == catName).breed;
    
    res.send(`Cat name: ${catName}, breed: ${breed}`);
});


router.get('/about', (req, res) => {
  res.send('About Us Page ');
});

router.use((req, res) => {
  res.status(404).send('Page Not Found');
});

module.exports = router;