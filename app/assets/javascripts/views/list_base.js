TrelloClone.Views.ListBase = Backbone.View.extend({
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