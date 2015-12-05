/**
 * Created by RENATO on 05/12/2015.
 */

var countdown = require('countdown');
var model = require('./model.js');

var helper = module.exports = {
    dateDiff: function() {
        return countdown(model.currentDate, model.eventDate)
    }
};
