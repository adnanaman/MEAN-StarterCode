const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Coin } = require("../models/Coin");

router.get("/list", (req, res) => {
  Coin.find((err, records) => {
    if (!err) {
      res.send(records);
    } else {
      console.log(
        "error in retreiving data from coin collection " +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.res.send(400).send("no record found");
  } else {
    Coin.findById(req.params.id, (err, records) => {
      if (!err) {
        res.send(records);
      } else {
        console.log(
          "error in retreiving data from coin collection " +
            JSON.stringify(err, undefined, 2)
        );
      }
    });
  }
});

router.put("/:id", (req, res) => {
  console.log("a");
  if (!ObjectId.isValid(req.params.id)) {
    return res.res.send(400).send("no record found");
  } else {
    Coin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, records) => {
        if (!err) {
          res.send(records);
        } else {
          console.log(
            "error in retreiving data from coin collection " +
              JSON.stringify(err, undefined, 2)
          );
        }
      }
    );
  }
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.res.send(400).send("no record found");
  } else {
    Coin.findByIdAndRemove(req.params.id, (err, records) => {
      if (!err) {
        res.send(records);
      } else {
        console.log(
          "error in retreiving data from coin collection " +
            JSON.stringify(err, undefined, 2)
        );
      }
    });
  }
});
router.post("/", (req, res) => {
  var coin = new Coin({
    name: req.body.name,
    code: req.body.code,
    supply: req.body.supply,
    price: req.body.price
  });
  coin.save((err, records) => {
    if (!err) {
      res.send(records);
    } else {
      console.log(
        "error in saving data in coin collection " +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
