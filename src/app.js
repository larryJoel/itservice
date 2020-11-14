const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// conectando la BD
mongoose.connect('mongodb://127.0.0.1:27017/servicios',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(db =>console.log('Db Conected'))
.catch(err=> console.log(err));

//Importing routes
const indexRoutes = require('./routes/index')

// setings
app.set('port', process.env.PORT || 5000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routes
app.use('/', indexRoutes);

//starting server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});
