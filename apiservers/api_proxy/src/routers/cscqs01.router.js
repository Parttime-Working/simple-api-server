// .env
const dotenv = require('dotenv');
// I don't know why
dotenv.config({ path: '../../.env' });

const express = require("express");
const router = express.Router();

const axios = require("axios");
const qs = require("qs");
const iconv = require("iconv-lite");

// define the home page route
router.get("/cscqs01", async (req, res) => {
  console.log(req.path);
  console.log(req.params);
  console.log(req.query);
  console.log(process.env.CSC_URL);

  const cscqs01Client = axios.create({
    baseURL: process.env.CSC_URL,
  });
  const cscqsResp = await cscqs01Client.get("", {
    params: req.query,
    paramsSerializer: {
      // Custom serializer function for the entire parameter. Allows user to mimic pre 1.x behaviour.
      serialize: qs.stringify,
    },
    responseType: "arraybuffer",
  });

  const decodedStr = iconv.decode(Buffer.from(cscqsResp.data), "big5");
  // console.log(decodedStr)
  res.send(decodedStr);
});

module.exports = router;
