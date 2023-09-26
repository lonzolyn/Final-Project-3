const router = require('express').Router()
const db = require("../models")

const { Park, Comment, User } = db

router.post('/', async (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    const park = await Park.create(req.body)
    res.json(park)
})


router.get('/', async (req, res) => {
    const park = await Park.findAll()
    res.json(parks)
})


router.get('/:parkId', async (req, res) => {
    let parkId = Number(req.params.parkId)
    if (isNaN(parkId)) {
        res.status(404).json({ message: `Invalid id "${parkId}"` })
    } else {
        const park = await Park.findOne({
            where: { parkId: parkId },
            include: {
                association: 'comments',
                include: 'author'
            }
        })
        if (!park) {
            res.status(404).json({ message: `Could not find park with id "${parkId}"` })
        } else {
            res.json(park)
        }
    }
})

router.put('/:parkId', async (req, res) => {
    let parkId = Number(req.params.parkId)
    if (isNaN(parkId)) {
        res.status(404).json({ message: `Invalid id "${parkId}"` })
    } else {
        const park = await Park.findOne({
            where: { parkId: parkId },
        })
        if (!park) {
            res.status(404).json({ message: `Could not find park with id "${parkId}"` })
        } else {
            Object.assign(park, req.body)
            await park.save()
            res.json(park)
        }
    }
})

router.delete('/:parkId', async (req, res) => {
    let parkId = Number(req.params.parkId)
    if (isNaN(parkId)) {
        res.status(404).json({ message: `Invalid id "${parkId}"` })
    } else {
        const park = await Park.findOne({
            where: {
                parkId: parkId
            }
        })
        if (!park) {
            res.status(404).json({ message: `Could not find park with id "${parkId}"` })
        } else {
            await park.destroy()
            res.json(park)
        }
    }
})

router.post('/:parkId/comments', async (req, res) => {
    const parkId = Number(req.params.parkId)

    req.body.rant = req.body.rant ? true : false

    const park = await Park.findOne({
        where: { parkId: parkId }
    })

    if (!park) {
        res.status(404).json({ message: `Could not find park with id "${parkId}"` })
    }

    const author = await User.findOne({
        where: { userId: req.body.authorId }
    })

    if (!author) {
        res.status(404).json({ message: `Could not find author with id "${req.body.authorId}"` })
    }

    const comment = await Comment.create({
        ...req.body,
        parkId: parkId
    })

    res.send({
        ...comment.toJSON(),
        author
    })
})

router.delete('/:parkId/comments/:commentId', async (req, res) => {
    let parkId = Number(req.params.parkId)
    let commentId = Number(req.params.commentId)

    if (isNaN(parkId)) {
        res.status(404).json({ message: `Invalid id "${parkId}"` })
    } else if (isNaN(commentId)) {
        res.status(404).json({ message: `Invalid id "${commentId}"` })
    } else {
        const comment = await Comment.findOne({
            where: { commentId: commentId, parkId: parkId }
        })
        if (!comment) {
            res.status(404).json({ message: `Could not find comment with id "${commentId}" for park with id "${parkId}"` })
        } else {
            await comment.destroy()
            res.json(comment)
        }
    }
})


module.exports = router

