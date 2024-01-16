const express = require('express');
const router = express.Router();

router.all('*', (req, res) => {
  res.status(404);
  res.send(
    '<html><head><title>Not Found</title></head><body><h1>404 Not Found</h1><p>The requested location was not found.</p></body></html>',
  );
});

module.exports = router;
