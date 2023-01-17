const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    triggerTime: {
        type: String,
        required: true
    }
});

const Event = new mongoose.model('Event', eventSchema);

module.exports = Event;