const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// GET all videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add new video
router.post('/', async (req, res) => {
  const { title, description, url } = req.body;
  const video = new Video({ title, description, url });
  try {
    const newVideo = await video.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
