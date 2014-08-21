TrelloClone.Views.Item = Backbone.View.extend({
  template: JST["item_view"],
  render: function() {
    var content = this.template({ item: this.model });
    this.$el.html(content);

    return this;
  },
});