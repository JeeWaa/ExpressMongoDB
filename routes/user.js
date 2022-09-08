const express = require('express')
const router = express.Router()
const User = require('../models/user.models')

const app = express()

app.use(express.json())

router.get('/', async (req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    }catch (error) {
        res.send(error)
    }
})

router.post('/', async (req,res) => {
    const user = new User({
        firstName: req.body.firstName,
        username: req.body.username,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        password: req.body.password,
        number: req.body.number,
        email: req.body.email
    })

    try {
        const response = await user.save()
        res.json(response)
    }catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const response = await user.remove()
        res.json(response)
    }catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        user.firstName: req.body.firstName
        user.username: req.body.username
        user.gender: req.body.gender
        user.dateOfBirth: req.body.dateOfBirth
        user.password: req.body.password
        user.number: req.body.number
        user.email: req.body.email

        const response = await user.save()
        res.json(response)
    }catch (error) {
        res.send(error)
    }
})
