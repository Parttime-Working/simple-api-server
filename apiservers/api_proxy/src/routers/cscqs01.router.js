const express = require('express');
const router = express.Router();
const config = require('../config/services.config');

const axios = require('axios');
const qs = require('qs');
const iconv = require('iconv-lite');

// define the home page route
router.get('*', async (req, res) => {
  try {
    const cscqs01Client = axios.create({
      baseURL: config.cscqs01.url,
    });
    const cscqsResp = await cscqs01Client.get('', {
      params: req.query,
      paramsSerializer: {
        // Custom serializer function for the entire parameter. Allows user to mimic pre 1.x behaviour.
        serialize: qs.stringify,
      },
      responseType: 'arraybuffer',
    });

    const decodedStr = iconv.decode(Buffer.from(cscqsResp.data), 'big5');
    // console.log(decodedStr)
    res.send(decodedStr);
  } catch(e) {
    console.log(e)
    res.send("error")
  }
});

module.exports = router;
