/**
 * Created by liormb on 10/13/14.
 */

"use strict";

var Item = require('../../js/models/item-model');
var Items = require('../../js/collections/items-list');

describe('Items collection', function () {

    var item;
    var items;

    beforeEach(function () {
        item = new Item();
        items = new Items({ model: item });
    });

    it("should be defined", function () {
        expect(items).toBeDefined();
    });

    it("should have an item model", function () {
        expect(items.models.length).toEqual(1);
        expect(items.models[0].get('id')).toEqual(item.get('id'));
    });
});
