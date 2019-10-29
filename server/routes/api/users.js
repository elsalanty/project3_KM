const router = require("express").Router();
const apbio = require("../../apbio.model");

router.route("/").post(function(req, res) {
  apbio
    .create(req.body)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(error) {
      res.send("error");
    });
});

router
  .route("/:id")
  .get(function(req, res) {
    apbio
      .findById(req.params.id)
      .then(function(response) {
        res.send(response);
      })
      .catch(function(error) {
        res.send("error");
      });
  })

  .put(function(req, res) {
    apbio
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;
