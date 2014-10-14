"use strict"

var Item = require('../../js/models/item-model');

describe('Item Model', function () {

    var item;

    beforeEach(function () {
        var itemInfo = {
            title: "New Item"
        };

        item = new Item(itemInfo);
    });

    it('should be true', function () {
        expect(true).toBe(true);
        expect(item).toBeDefined();
        expect(item.get('title')).toEqual("New Item");
    });
});