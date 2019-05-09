const { Schema, ...mongoose } = require('mongoose');

const groupModel = new Schema({
    name: {type: String, required: true},
    purpose: { type: String, require: false },
    emails: {type: Array, required: false},
    sCode: { type: String, required: true }
})

mongoose.model('Group', groupModel);