var Backbone = require('backbone');
var DataviewModel = require('../../../src/dataviews/dataview-model-base');
var fakeFactory = require('../../helpers/fakeFactory');

describe('dataviews/dataview-collection', function () {
  beforeEach(function () {
    this.collection = new Backbone.Collection();
    this.source = fakeFactory.createAnalysisModel({ id: 'a0' });
  });

  it('should remove item when removed', function () {
    var map = jasmine.createSpyObj('map', ['getViewBounds', 'off']);
    map.getViewBounds.and.returnValue([[0, 0], [0, 0]]);
    var vis = jasmine.createSpyObj('vis', ['reload']);
    var dataviewModel = new DataviewModel({
      source: this.source
    }, {
      map: map,
      vis: vis
    });
    this.collection.add(dataviewModel);
    expect(this.collection.length).toEqual(1);
    this.collection.first().remove();
    expect(this.collection.length).toEqual(0);
  });
});
