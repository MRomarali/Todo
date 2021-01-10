const express = require('express')
const router = express.Router()
const Posts = require('../models/post')

//GETTING ALL
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find()
        res.send(posts)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//GETTING ONE
router.get('/:id', getPost, (req, res) => {
    res.json(req.post)
    console.log(req)
})

//CREATING ONE
router.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        text: req.body.text
    })
    try {
        const newPost = await post.save()
        res.status(201).json(newPost)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//UPDATING ONE
router.patch('/:_id', getPost, async (req, res) => {
    if (req.body.title) {
        req.post.title = req.body.title
        console.log('Changing title to', req.body.title)
    }
    if (req.body.text) {
        req.post.text = req.body.text
        console.log('Changing text to', req.body.text)
    }
    try {
        const updatePost = await req.post.save()
        res.json(updatePost)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//DELETE ONE
router.delete('/:_id', getPost, async (req, res) => {
    try {
        await req.post.remove()
        res.json({ message: 'Deleted Post' })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//MIDDLEWARE FOR FINDING USER
async function getPost(req, res, next) {
    let post
    try {
        post = await Posts.findById(req.params._id)
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' })
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
    req.post = post
    next()
}

module.exports = router