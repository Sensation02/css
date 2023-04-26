const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {})
})

router.get('/grid', function (req, res) {
  res.render('grid', {
    layout: 'default',
  })
})

module.exports = router
