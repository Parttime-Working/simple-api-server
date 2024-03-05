const express = require('express');
const router = express.Router();
const apiProxyClient = require('../lib/apiProxyClient');
const qs = require('qs')

router.get('/*', async (req, res) => {
  try {
    const proxyResp = await apiProxyClient.get(`/cscqs01`, {
      params: req.query,
      // 這一段是強迫轉qs，因為有個白癡空格
      paramsSerializer: {
        serialize: qs.stringify,
      },
    });

    res.send(proxyResp.data);
  } catch (err) {
    console.log(err);
    res.send('api gateway error');
  }
});

module.exports = router;
