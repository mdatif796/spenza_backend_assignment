const path = require('path');
const Event = require('../models/event');
const fs = require('fs');

module.exports.home = async (req, res) => {
    try {
        res.sendFile(path.resolve(__dirname,'../public/index.html'));
    } catch (error) {
        console.log('error: ', error);
        res.end('<h1>Error</h1>');
    }
}

module.exports.generateLog = async (req, res) => {
    try {
        let events = await Event.find({});
        let app_log = "";
        events.forEach((event) => {
            app_log += event.event + ' --> ' + event.triggerTime + '\n';
        });
        fs.writeFile('app_log', app_log, (err) => {
            console.log('Printed all log in app_log file');
        });
        return res.redirect('back');
    } catch (error) {
        res.end('<h1>Error</h1>');
    }
}

module.exports.on = async (req, res) => {
    try {
        let event = await Event.create({
            event: "On",
            triggerTime: new Date()
        });
        console.log("On event added to the database");
        return res.redirect('back')
    } catch (error) {
        res.end('<h1>Error</h1>');
    }
}

module.exports.trigger = async (req, res) => {
    try {
        let event = await Event.create({
            event: "Trigger",
            triggerTime: new Date()
        });
        console.log("Trigger event added to the database");
        return res.redirect('back')
    } catch (error) {
        res.end('<h1>Error</h1>');
    }
}

module.exports.off = async (req, res) => {
    try {
        let event = await Event.create({
            event: "Off",
            triggerTime: new Date()
        });
        console.log("Off event added to the database");
        return res.redirect('back')
    } catch (error) {
        res.end('<h1>Error</h1>');
    }
}