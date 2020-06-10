const express = require("express");

const Schemes = require("./scheme-model.js");
// const db = require("../data/schemes.db3");

const router = express.Router();

router.get("/", (req, res) => {
    Schemes.find()
        .then((schemes) => {
            res.json(schemes);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get schemes" });
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Schemes.findById(id)
        .then((scheme) => {
            if (scheme) {
                res.json(scheme);
            } else {
                res.status(404).json({
                    message: "Could not find scheme with given id.",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get schemes" });
        });
});

router.get("/:id/steps", (req, res) => {
    const { id } = req.params;

    Schemes.findSteps(id)
        .then((steps) => {
            if (steps.length) {
                res.json(steps);
            } else {
                res.status(404).json({
                    message: "Could not find steps for given scheme",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get steps" });
        });
});

router.post("/", (req, res) => {
    const schemeData = req.body;

    Schemes.add(schemeData)
        .then((scheme) => {
            res.status(201).json(scheme);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new scheme" });
        });
});

router.post("/:id/steps", (req, res) => {
    const stepData = req.body;
    const { id } = req.params;

    Schemes.findById(id)
        .then((scheme) => {
            if (scheme) {
                Schemes.addStep(stepData, id).then((step) => {
                    res.status(201).json({ step, stepData });
                });
            } else {
                res.status(404).json({
                    message: "Could not find scheme with given id.",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new step" });
        });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Schemes.findById(id)
        .then((scheme) => {
            if (scheme) {
                Schemes.update(changes, id).then((updatedScheme) => {
                    res.json({
                        UpdatedScheme: `ID ${id}, is now known as '${changes.scheme_name}'`,
                    });
                });
            } else {
                res.status(404).json({
                    message: "Could not find scheme with given id",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to update scheme" });
        });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Schemes.remove(id)
        // .then(res.status(200).json({ del: "item was deleted" }))
        // .catch(res.status(404).json({ err: "item not found" }));
        .then((delitem) => {
            console.log(delitem);
            if (delitem > 0) {
                res.status(200).json({ del: "item deleted" });
            } else if (delitem === 0)
                res.status(404).json({ error: "Item is not in database" });
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
