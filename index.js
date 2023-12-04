let express = require('express');
let bodyParser = require('body-parser');
let dotenv = require('dotenv');
let methodOverride = require('method-override')
let session = require('express-session');
let flash = require('connect-flash')
let mongoose = require('mongoose')
let app = express()

// set locat variable






app.set('view engine', 'ejs')
dotenv.config({path:'./config.env'})
app.use(express.static(__dirname+'/public/'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
mongoose.connect(process.env.mongoUrl)



app.use(session({
    secret:'nodejs',
    resave:true,
    saveUninitialized:true
}))
app.use(flash())

// let pageModel = require('./model/pageModel')
// let productModel = require('./model/productModel')
// let catModel = require('./model/categorymodel')
// app.use((req, res, next)=>{
//     res.locals.sucess = req.flash('sucess') 
//     res.locals.err = req.flash('err')
    //Note: yahan 'sucess' & 'err' globaly message set kiya jaa raha hai jiska use puer application men kahin bhi kiya jaa sakta hai    
    
    //PASS PAGE DATA TO ALL FRONTENT HEADER
//         pageModel.find({})
//         .then((x) => {
//             res.locals.navdata = x;         
//         })
//         .catch((y) => {
//            // console.log(y)
//         })
//     // PASS ALL COURSERS LIST TO ALL COURESE PAGES
//         productModel.find({})
//         .then((x)=>{
//             res.locals.allcourses = x;   
//         })
        
//     //PASS ALL CATEGORY DATA ANY WHERE
//     catModel.find()
//     .then((x)=>{
//         res.locals.allcat = x
//     })
       
    
    
//     next()
//  })



//===========BACKEND ROUTER START HERE

// let admin = require('./router/backend/admin')
// let adminpages = require('./router/backend/admin-page')
// let admincategory = require('./router/backend/admin-category')
// let adminproducts = require('./router/backend/admin-products')

// set router
// app.use('/admin/', admin) // route admin
// app.use('/admin/pages/', adminpages) // top navigation like (home, about, contact,)
// app.use('/admin/category/', admincategory) //for category like (Java Script, NodeJs, Mongodb)
// app.use('/admin/products/', adminproducts) //for product like ( javascript related all topic || nodejs related All topic..)




//BACKEND ROUTER END HERE
// let pages = require('./router/frontent/page')
// let course = require('./router/frontent/product')
// let about =require('./router/frontent/about')
// app.use('/course', course) 
// app.use('/', pages) 
// app.use('/about', about)

//===========FRONTENT ROUTER START HERE

app.get('/', (req,res)=>{
    res.render('frontent/home')
});
app.get('/about', (req,res)=>{
    res.render('frontent/about')
});
app.get('/contact', (req,res)=>{
    res.render('frontent/contact')
});
app.get('/bhandavgarh', (req,res)=>{
    res.render('frontent/bhandavgarh')
});
app.get('/test2', (req,res)=>{
    res.render('frontent/test2')
});
app.get('/hotel-detailpage', (req,res)=>{
    res.render('frontent/hotel-detailpage')
});
app.get('/tour-single', (req,res)=>{
    res.render('frontent/tour-single')

});
app.get('/car-single', (req,res)=>{
    res.render('frontent/car-single')
});
app.get('/blog-detail', (req,res)=>{
    res.render('frontent/blog-detail')
});
app.get('/blog', (req,res)=>{
    res.render('frontent/blog')
});
app.get('/ViewAllToure', (req,res)=>{
    res.render('frontent/ViewAllToure')
});
app.get('/ViewAllRoom', (req,res)=>{
    res.render('frontent/ViewAllRoom')
});
app.get('/ViewAllRide', (req,res)=>{
    res.render('frontent/ViewAllRide')
});
app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT, 'Port Working')
})