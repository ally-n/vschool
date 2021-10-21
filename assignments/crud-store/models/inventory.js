const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    object: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    _id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Inventory", InventorySchema);



