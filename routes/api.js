var express = require('express');
var router = express.Router();

const hello_obj = [
  {title: 'Hello, world (again)!'}
];

/* GET users listing. */
/* /api/?api_key=1234&api_param={"a":"b"} */
router.get('/', (req, res, next) => {
  var api_key = req.query['api_key'];
  console.log(api_key)
  var api_param = req.query['api_param'];
  console.log(api_param)
  res.send(hello_obj);
});

module.exports = router;
