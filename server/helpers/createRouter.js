const express = require('express');
const { ObjectId } = require('mongodb');


const handleError = res => {
  return err => {
  console.error(err)
  res.status(500)
  res.json({ status: 500, error: err })
  }
}

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {

    res.send("hiya")
    // collection
    //   .find()
    //   .toArray()
    //   .then((docs) => res.json(docs))
    //   .catch((err) => {
    //     console.error(err);
    //     res.status(500);
    //     res.json({ status: 500, error: err });
    //   });
  });

  return router;
};

module.exports = createRouter;
