const router = require('express').Router()
const {
    getAllPark,
    getParkById,
    createPark,
    updateParkById,
    deleteParkById
} = require('../controllers/park')

//get /
router.get('/', getAllPark)

//get/:id get by id
router.get('/:id', getParkById)

//post/ create
router.post('/',createPark)

//put/:id update
router.put('/:id', updateParkById)

//delete/:id delete by id
router.delete('/:id', deleteParkById)

module.exports = router