// Retrieve all CDs with optional filters

const express = require('express');
const router = express.Router();
const CD = require('../models/CD');

/*
=========================================
GET /cds
Retrieve all CDs with optional filters
=========================================
Supported query parameters:
?artist=Artist Name
?genre=Genre
?year=2000
?before=2000
?fields=title
?fields=title,artist
*/
router.get('/', async (req, res) => {
  try {
    const filters = {};
    const { artist, genre, year, before, fields } = req.query;

    if (artist) {
      filters.artist = artist;
    }

    if (genre) {
      filters.genre = genre;
    }

    if (year) {
      filters.year = Number(year);
    }

    if (before) {
      filters.year = { $lt: Number(before) };
    }

    const projection = fields ? fields.replace(/,/g, ' ') : '';

    const cds = await CD.find(filters).select(projection);

    res.status(200).json(cds);

  } catch (err) {
    res.status(500).json({
      error: 'Failed to fetch CDs',
      message: err.message
    });
  }
});

/*
=========================================
POST /cds
Add a new CD
=========================================
*/
router.post('/', async (req, res) => {
  try {

    const cd = await CD.create(req.body);

    res.status(201).json(cd);

  } catch (err) {
    res.status(400).json({
      error: 'Invalid CD data',
      message: err.message
    });
  }
});

/*
=========================================
PUT /cds/:id
Update an existing CD
=========================================
*/
router.put('/:id', async (req, res) => {
  try {

    const cd = await CD.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!cd) {
      return res.status(404).json({
        error: 'CD not found'
      });
    }

    res.status(200).json(cd);

  } catch (err) {
    res.status(400).json({
      error: 'Failed to update CD',
      message: err.message
    });
  }
});

/*
=========================================
DELETE /cds/:id
Delete a CD
=========================================
*/
router.delete('/:id', async (req, res) => {
  try {

    const cd = await CD.findByIdAndDelete(req.params.id);

    if (!cd) {
      return res.status(404).json({
        error: 'CD not found'
      });
    }

    res.status(200).json({
      message: 'CD deleted successfully',
      deletedCD: cd
    });

  } catch (err) {
    res.status(400).json({
      error: 'Failed to delete CD',
      message: err.message
    });
  }
});

module.exports = router;