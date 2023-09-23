const router = require('express').Router()
const {
    getAllPark,
    getParkById,
    createPark,
    UpDateParkById,
    DeleteParkById
} = require('../controllers/park')

//get /
router.get('/', getAllPark)

//get/:id get by id
router.get('/:id', getParkById)

//post/ create
router.post('/', )

//put/:id update
//router.put('/:id', UpdateParkById)

//delete/:id delete by id
//router.delete('/id', DeleteParkId)

module.exports = router