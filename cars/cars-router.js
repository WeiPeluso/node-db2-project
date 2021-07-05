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

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Cars.update(id, changes) // don't forget to have a WHERE
    .then((count) => {
      // count is the number of records updated
      if (count > 0) {
        res.status(200).json({ data: count });
      } else {
        res.status(404).json({ message: "there was no car to update" });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Failed to add a car" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Cars.remove(id)
    .then((count) => {
      // count is the number of records deleted
      if (count > 0) {
        res.status(200).json({ data: count });
      } else {
        res.status(404).json({ message: "there was no car to delete" });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Failed to remove a car" });
    });
});
module.exports = router;
