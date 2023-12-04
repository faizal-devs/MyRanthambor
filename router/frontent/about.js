let express = require('express')
let pageModel = require('../../model/pageModel')
let router = express()



router.get('/about',(req, res)=>{

        res.render('../views/frontent/about', {x})

    
})





module.exports = router