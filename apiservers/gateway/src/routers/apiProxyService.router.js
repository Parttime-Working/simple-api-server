const express = require('express');
const router = express.Router();
const apiProxyClient = require('../lib/apiProxyClient');

router.get('/*', async (req, res) => {
  try {
    const proxyResp = await apiProxyClient.get(req.path);

    res.send(proxyResp.data);
  } catch (err) {
    console.log(err.message);
    res.send('error');
  }
});

module.exports = router;
