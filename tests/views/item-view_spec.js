/**
 * Created by liormb on 10/14/14.
 */

"use strict";

var Item = require('../../js/models/item-model');
var ItemView = require('../../js/views/item-view');

describe('Item view', function () {

    var item;
    var itemView;

    beforeEach(function () {
        var itemInfo = {
            "title": "Test Item",
            "description": "Some description",
            "dealerInternalNotes": "My notes",
            "material": {
                "description": "",
                "restricted": "N"
            },
            "measurement": {
                "unit": "",
                "shape": "",
                "length": "10",
                "depth": "20",
                "height": "30"
            },
            "condition": {
                "description": ""
            }
        };

        item = new Item(itemInfo);
        //itemView = new ItemView({ model: item });
    });

    it("should be defined", function () {
        //expect(itemView).toBeDefined();
        //expect(itemView.get('model')).toBeDefined();
    });

    it("should have item model", function () {
        expect(item.get('cid')).not.toBeNull();
        expect(item.get('description')).toEqual("Some description");
    });
});