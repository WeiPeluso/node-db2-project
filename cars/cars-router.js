const express = require("express");

const router = express.Router();
const Cars = require("../model/carModel");

router.get("/", (req, res) => {
  Cars.find()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  console.log(carData);
  Cars.add(carData)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Failed to add a car" });
    });
});

module.exports = router;
