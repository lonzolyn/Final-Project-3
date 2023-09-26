const Park = require('../models/park')

async function getAllPark(req, res) { 
    try { 
        const park = await Park.find() 
        res.json(park) 
    } catch (error) { 
        console.log('error fetching park:', error) 
        res.json({ 'message': 'error fetching park' })
    }
}
async function getParkById(req, res) { 
    try { 
        const { id } = req.params 
        const park = await Park.findById(id) 
        res.json(park) 
    } catch (error) { 
        console.log('error fetching park by id:', error) 
        res.json({ 'message': 'error fetching park' }) 
    } 
}
async function createPark(req, res) { 
    try { 
        await new Park(req.body).save() 
        res.status(201).json({ 'message': 'park created' }) 
    } catch (error) { 
        console.log('error creating park:', error) 
        res.json({ 'message': 'error creating park' }) 
    } 
}

async function updateParkById(req, res) { 
    try { 
        if (!req.body.image) req.body.image = undefined 
        await Bread.findByIdAndUpdate(req.body) 
        res.status(204).json({ 'message': 'park updated' }) 
    } catch (error) { 
        console.log('error updating park:', error) 
        res.json({ 'message': 'error updating park' }) 
    } 
}


async function deleteParkById(req, res) { 
    try { 
        const { id } = req.params 
        await Park.findByIdAndDelete(id) 
        res.status(204).json({ 'message': 'park deleted' }) 
    } catch (error) { 
        console.log('error deleting park:', error) 
        res.json({ 'message': 'error deleting breadpark' }) 
    } 
}


module.exports = {
    getAllPark,
    getParkById,
    createPark,
    updateParkById,
    deleteParkById,
}

