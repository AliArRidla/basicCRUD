// import expresss js 
const express = require('express')
// import router
const articleRouter = require('./routes/articles')
// import database mongoose
const mongoose = require('mongoose')
// import model
const Article = require('./models/article')
const app = express()

mongoose.connect('mongodb://localhost/basic', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: false
}));



// routing
app.get('/', async(req, res) => {

   const articles = await Article.find().sort({createdAt:'desc'})
    res.render('articles/index',{articles: articles});
})

app.use('/articles', articleRouter);

// app.use('/articles/:id',articleRouter)

// port listening
app.listen(5000, () => {
    console.log(`Server started on port`);
});

