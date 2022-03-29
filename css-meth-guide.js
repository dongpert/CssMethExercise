const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/2-5', (req, res) => {
    res.render('2-5', {
        style: '2-5'
    })
})

const port = process.env.port || 3000
app.use(express.static(__dirname + '/public'))

app.listen(port, () => console.log(`Express started on http://localhost:${port}`))
