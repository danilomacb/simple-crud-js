const express = require("express");

const Element = require("./models/Element");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const elements = await Element.find();

    return res.status(200).send(elements);
  } catch (err) {
    console.error("Error on read: ", err);
    return res.status(500).send("Error on read");
  }
});

router.post("/", async (req, res) => {
  try {
    await Element.create(req.body);

    return res.status(200).send("create succeeded");
  } catch (err) {
    console.error("Error on create: ", err);
    return res.status(500).send("Error on create");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Element.findByIdAndUpdate(req.params.id, { ...req.body });

    return res.status(200).send("update succeeded");
  } catch (err) {
    console.error("Error on update: ", err);
    return res.status(500).send("Error on update");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Element.findByIdAndDelete(req.params.id);

    return res.status(200).send("delete succeeded");
  } catch (err) {
    console.error("Error on delete: ", err);
    return res.status(500).send("Error on delete");
  }
});

module.exports = router;
