const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', function (req, res, next) {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:
    {
      model:Product,
      through: ProductTag
    }
  })
  .then(function(result) {
    res.send(result);
    res.end();
});
});


router.get('/:id', function (req, res, next) {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where:
    {
      id: req.params.id
    },
    include:
    {
      model:Product,
      through: ProductTag
    }
  })
  .then(function(result) {
    res.send(result);
    res.end();
});
});


router.post('/', function (req, res, next) {
  Tag.create(req.body)

  .then(function(result) {
    res.send(result);
    res.end();
});
});


router.put('/:id', function (req, res, next) {
  Tag.update(req.body,{
    where:
    {
      id:req.params.id
    }
  })
  .then(function(result) {
    res.send(result);
    res.end();
});
});


router.delete('/:id', function (req, res, next) {
  Tag.destroy({
    where:
    {
      id:req.params.id
    }
  })
  .then(function(result) {
    res.json(result);
    res.end();
});
});


module.exports = router;