const express = require('express')
const router = express.Router()
const Users = require('../models/user')

//GETTING ALL
router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.send(users)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//GETTING ONE
router.get('/:_id', getUser, (req, res) => {
    res.json(req.user)
})

//CREATING ONE
router.post('/', async (req, res) => {
    console.log(req.headers, req.body)
    const user = new Users({
        Todo: req.body.Todo
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//UPDATING ONE
router.patch('/:_id', getUser, async (req, res) => {
    if (req.body.Todo) {
        req.user.Todo = req.body.Todo
        console.log('Changing Todo to', req.body.Todo)
    }
    try {
        const updateUser = await req.user.save()
        res.json(updateUser)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//DELETE ONE
router.delete('/:_id', getUser, async (req, res) => {
    try {
        await req.user.remove()
        res.json({ message: 'Deleted User' })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//MIDDLEWARE FOR FINDING USER
async function getUser(req, res, next) {
    let user
    try {
        user = await Users.findById(req.params._id)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
    req.user = user
    next()
}

module.exports = router