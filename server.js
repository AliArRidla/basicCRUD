// import expresss js 
const express = require('express')
// import router
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs');


app.use('/articles',articleRouter);

// routing
app.get('/', (req, res) => {

    const articles = [{
        title : "judul pertama",
        body : "ini adalah isi dari judul pertama",
        createdAt : new Date() 
    },
    {
        title: "judul kedua",
        body: "ini adalah isi dari judul pertama",
        createdAt: new Date()
    }]
    res.render('index',{articles: articles});
});

// port listening
app.listen(5000, () => {
    console.log(`Server started on port`);
});

