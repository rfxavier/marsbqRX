/**
 * Created by RENATO on 05/12/2015.
 */
var helper = require('./helper.js');

var view = module.exports = {
    init: function() {
        view.showCountdown();
    },

    showCountdown: function () {
        var diff = helper.dateDiff();

        document.querySelector('#years').innerHTML = diff.years;
        document.querySelector('#months').innerHTML = diff.months;
        document.querySelector('#days').innerHTML = diff.days;
    }
};
