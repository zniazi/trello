TrelloClone.Views.Card = TrelloClone.Views.ListBase.extend({
  template: JST["card_view"],
  events: {
    "click .delete-card": "deleteCard"
  },
  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    var that = this;
    this.collection.forEach(function(model) {
      var subview = new TrelloClone.Views.Item({ model: model });
      that.subviews().push(subview);
      that.$(".items").append(subview.render().$el);
    });

    return this;
  },
  deleteCard: function(event) {
    this.model.destroy();
  }
});