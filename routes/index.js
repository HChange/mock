let express = require('express');
const { getMock } = require('./constants');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: `Change's mock` });
});

router.get('/get', (req, res, next) => {
  let data;
  const query = req.query;
  data = getMock(query, next);
  if (data) {
    res.send(data);
  }
});

router.post('/get', (req, res, next) => {
  let data;
  const query = req.body;
  data = getMock(query, next);
  if (data !== undefined) {
    res.send(data);
  }
});
module.exports = router;
