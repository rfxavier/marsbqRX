/**
 * Created by RENATO on 05/12/2015.
 */
var request = require('superagent');

var model = module.exports = {
    init: function() {
        model.getData();
    },

    currentDate: new Date(),
    eventDate: new Date(2056, 10, 05),

    menuItem: {
        title: null,
        count: null,
        id: null
    },

    menu: {},

    getData: function() {
        request.get('menu.json', function(err, res) {
            model.menu = JSON.parse(res.text).menuItems;
            //console.log(model.menu);
            //console.log(res.text);
            //console.log(JSON.parse(res.text));
        });
    }
};