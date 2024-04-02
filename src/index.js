const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ejs
app.set('view engine', 'ejs');

//static public 
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.get('/tasks', (req, res) => {
    res.render('tasks');
})

app.get('/calendar', (req, res) => {
    res.render('calendar');
})

app.get('/projects', (req, res) => {
    res.render('projects');
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
