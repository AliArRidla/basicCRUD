// import expresss js 
const express = require('express')
// import router
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs');


app.use('/articles',articleRouter);

// routing
app.get('/', (req, res) => {
    res.render('index',{text: 'Hello'});
});

// port listening
app.listen(5000, () => {
    console.log(`Server started on port`);
});