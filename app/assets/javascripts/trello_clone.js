window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TrelloClone.Routers.Router();
    Backbone.history.start();
  }
};

Backbone.Collection.prototype.getOrFetch = function (id) {
  var collection = this;
  var model;
  if (model = this.get(id)) {
    model.fetch();
  } else {
    model = new this.model({ id: id });
    model.fetch({
      success: function () {
        collection.add(model);
      }
    });
  }

  return model;
};

TrelloClone.Views.ListBase = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "add change remove", this.render);
  },

  remove: function() {
    this.subviews().forEach(function(subview) {
      subview.remove();
    });
    Backbone.View.prototype.remove.call(this);
  },

  subviews: function() {
    return this._subviews || (this._subviews = []);
  }
});