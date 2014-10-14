"use strict"

var Item = require('../../js/models/item-model');

describe('Item model', function () {

    var item;

    beforeEach(function () {
        var itemInfo = {
            "id": null,
            "title": "Item Title",
            "description": "",
            "dealerInternalNotes": "",
            "material": {
                "description": "",
                "restricted": "N"
            },
            "measurement": {
                "unit": "",
                "shape": "",
                "length": "",
                "depth": "",
                "height": ""
            },
            "condition": {
                "description": ""
            }
        };

        item = new Item(itemInfo);
    });

    it('should be defined', function () {
        expect(item).toBeDefined();
    });

    it("should have urlRoot property", function () {
        expect(item.urlRoot).toBeDefined();
        expect(item.urlRoot).toEqual('./json');
    });

    it("should have default properties", function () {
        expect(item.id).toBeDefined();
        expect(item.id).toBeNull();
        expect(item.get('title')).toEqual("Item Title");
        expect(item.get('material')).toBeDefined();
        expect(item.get('material').restricted).toEqual('N');
    });
});