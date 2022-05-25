const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require ('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var DB= 
{
    games:
    [
        {
            id:23,
            title: 'Call of Duty MW',
            year: 2019,
            price: 60
        },
        {
            id:47,
            title: 'AC Creed Rogue',
            year: 2016,
            price: 85
        },
        {
            id:22,
            title: 'AC Creed Freedom Cry',
            year: 2015,
            price: 81
        },
        {
            id:95,
            title: 'Arkham Knight',
            year: 2018,
            price: 90
        },
        {
            id:18,
            title: 'Streets of Rage 4',
            year: 2020,
            price: 120
        },
        {
            id:03,
            title: 'GTA V',
            year: 2013,
            price: 103
        }
    ]
}

//1º endpoint - listando games
app.get('/games',(req, res)=>{
    res.statusCode = 200
    res.json(DB.games)
})

//2º endpoint - procurando um game específico e validando a procura
app.get('/game/:id', (req, res) =>{
    
    if(isNaN(req.params.id))
    {
        res.sendStatus(400)
    }
    else
    {
        var id = parseInt(req.params.id)

        var game = DB.games.find(g => g.id == id)
        if(game != undefined)
        {
            res.statusCode = 200
            res.json(game)
        }
        else
        {
            res.sendStatus(404)
        }
    }
})

//3º endpoint - cadastro
app.post('/game',(req, res)=>{
    var {title, price, year} = req.body

    DB.games.push({
        id: 2323,
        title,
        price,
        year
    })

    res.sendStatus(200)
})

//4º endpoint - delete
app.delete('/game/:id', (req, res)=>{
    if(isNaN(req.params.id))
    {
        res.sendStatus(400)
    }
    else
    {
        var id = parseInt(req.params.id)

        var index = DB.games.findIndex(g => g.id == id)

        if(index == -1)
        {
            res.sendStatus(404)
        }
        else
        {
            DB.games.splice(index,1)
            res.sendStatus(200)
        }
        
    }
})

//5º endpoint - edição - método mais utilizado é o PUT
app.put('/game/:id', (req, res)=>{
    if(isNaN(req.params.id))
    {
        res.sendStatus(400)
    }
    else
    {
        var id = parseInt(req.params.id)

        var game = DB.games.find(g => g.id == id)
        if(game != undefined)
        {
            var {title, price, year} = req.body
            
            if(title != undefined)
            {
                game.title = title
            }

            if(price != undefined)
            {
                game.price = price
            }

            if(year != undefined)
            {
                game.year = year
            }

            res.sendStatus(200)
        }
        else
        {
            res.sendStatus(404)
        }
    }
})

app.listen(3535,() => {
    console.log('API rodando!')
})