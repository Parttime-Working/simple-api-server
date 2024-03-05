const express = require('express');
const router = express.Router();

router.all('*', (req, res) => {

  console.log("Invalid router path:", req.baseUrl)

  res.status(404);
  res.send('Not Found');
});

module.exports = router;
