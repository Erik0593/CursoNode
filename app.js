require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const hbs = require('hbs')


//handlerbars
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials')

//Servir contenido estatico
app.use( express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Erik Gutierrez',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Erik Gutierrez',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Erik Gutierrez',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/template/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})