import express from 'express';
import players from './data/players.js';

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/players', (req, res) => {
    res.json(players)
})

app.get('/api/players/:id', (req, res) => {
   const player = players.find((p) => p._id === req.params.id)
   res.json(player)
})

app.listen(5000, console.log('Server running on port 5000'))