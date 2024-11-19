const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Route to like/unlike an article
router.post('/like', authMiddleware, async (req, res) => {
  const { articleId, liked } = req.body;
  const userId = req.user.userId; // Access userId from the decoded JWT

  try {
    const user = await User.findById(userId);

    if (liked) {
      user.likedArticles.push(articleId);
    } else {
      user.likedArticles = user.likedArticles.filter(id => id.toString() !== articleId);
    }

    await user.save();
    res.json({ success: true, liked });
  } catch (error) {
    console.error("Error updating liked articles", error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
