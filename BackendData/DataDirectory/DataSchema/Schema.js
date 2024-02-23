const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: Number },
},{
    timestamps:true
});

const TabDataSchemaModel = mongoose.model("Tab", schema);

module.exports = TabDataSchemaModel;
