const express = require('express')
const api = express()
const port = 8080

api.use(express.json())

api.listen(port)

api.get('/dataSet', (req, res) => {
    res.status(200).send({
        key: 'Abortion is wrong', 
        color: 'red', 
        screen: 'AbortWrong'
    })
})

api.get('/dataSet/:id', (req, res) => {
    const {id} = res.params
    const {logo} = res.body

    res.status(200).send({
        key: 'Abortion is wrong',
        color: 'red',
        screen: 'AbortWrong'
    })
})

api.post('/dataSet/:id', (req, res) => {
    const {id} = req.params
    const {logo} = req.body

    if (!logo) {
        res.status(418).send({
            message: 'We need a logo!'
        })
    }

    res.send({
        key: `Abortion is wrong.\nlogo = ${logo}\nid = ${id}`
    })
})