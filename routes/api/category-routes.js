const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  router.get('/', function (req, res, next) {
     // find all categories
  // be sure to include its associated Products
  

    Category.findAll({

        include: [
            { 
                model:Product, 
                attributes:  ["id", "product_name", "price", "stock", "category_id"],
          
            }        
        ],

    }).then(function(result) {
        res.send(result);
        res.end();
    });
});


router.get('/:id', function (req, res, next)  {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:
    {
      id: req.params.id
    },
    include:
    [
      {
        model: Product
      }
    ]
  })
  .then(function(result) {
    res.send(result);
    res.end();
});
});


router.post('/', function (req, res, next)  {
  // create a new category

  Category.create(req.body)

  .then(function(result) {
    res.send(result);
    res.end();
});
});



router.put('/:id', function (req, res, next)  {
  // update a category by its `id` value

  Category.update(req.body,{
    where:
    {
      id: req.params.id
    }
  })
  .then(function(result) {
    res.send(result);
    res.end();
});
});

router.delete('/:id', function (req, res, next) {
  Category.destroy({
    where:
    {
      id: req.params.id
    }
  })
  .then(function(result) {
    res.json(result);
    res.end();
});
});

module.exports = router;
