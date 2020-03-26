const express = require('express')
const router = express.Router()
const route = require('../models/route')

router.get('/', async (req, res) => {
    try {
      const pays = await route.find()
      res.json(pays)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

router.get('/:id', (req, res) => {
})

router.post('/', async (req, res) => {
    const pays = new route({
      nom: req.body.nom,
      description: req.body.description,
      information: req.body.information
    })
  
    try {
      const newPays = await pays.save()
      res.status(201).json(newPays)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

router.patch('/:id', (req, res) => {
})

router.delete('/:id', (req, res) => {
})


module.exports = router
