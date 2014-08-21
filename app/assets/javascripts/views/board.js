TrelloClone.Views.Board = TrelloClone.Views.ListBase.extend({
  template: JST["board_view"],
  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    var that = this;
    this.model.lists().each(function(model) {
      var subview = new TrelloClone.Views.List({ model: model });
      that.subviews().push(subview);
      that.$(".lists").append(subview.render().$el);
    });

    return this;
  }


});