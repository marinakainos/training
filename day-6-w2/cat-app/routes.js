const express = require('express')

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
    let catsList = cats.map(c => c.name).join(", ")

    res.render("main", {
        catsList
    })
});

router.get('/cats/add', (req, res) => {
    let catsList = cats.map(c => c.name).join(", ")
    res.render('catForm', { catsList })
});

router.post('/submit', (req, res) => {
    let catsList = cats.map(c => c.name).join(", ");
    console.log(req.body);
    console.log('/submit ran');
    res.send(catsList);
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