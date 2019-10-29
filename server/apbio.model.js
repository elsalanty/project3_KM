const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ApbioSchema = new Schema({
  apbio_userName: {
    type: String
  },
  apbio_module1Complete: {
    type: Boolean,
    default: false
  },
  apbio_module1Grade: {
    type: Number
  },
  apbio_module2Complete: {
    type: Boolean,
    default: false
  },
  apbio_module2Grade: {
    type: Number
  }
});

const User = mongoose.model("user", ApbioSchema);

module.exports = User;
