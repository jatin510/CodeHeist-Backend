const express = require("express");
const app = express();
const router = express.Router();

// This is the central routing which will create routing links to the various
// routing links

// eg :
// HTTP request end point
// router.get('/',(req,res)=>{console.log(req.dta)})
// further routing
// router.use('/user/'. require('./user'))

module.exports = router;
