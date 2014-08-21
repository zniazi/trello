TrelloClone.Views.List = TrelloClone.Views.ListBase.extend({
  template: JST["list_view"],
  events: {
    "click .add-card": "showForm",
    "submit form": "addCard"
  },
  initialize: function() {
    this.listenTo(this.model.cards(), "add remove change", this.render);
  },
  render: function() {
    console.log(this.model);
    console.log(this.model.escape("title"));
    var content = this.template({ list: this.model });
    this.$el.html(content);
    var that = this;
    this.model.cards().each(function(model) {
      var subview = new TrelloClone.Views.Card({ model: model, collection: model.items() });
      that.subviews().push(subview);
      that.$(".cards").append(subview.render().$el);
    });

    return this;
  },
  showForm: function() {
    this.$("form").toggleClass("hidden");
    this.$(".add-card").toggleClass("hidden");
  },
  addCard: function (event) {
    event.preventDefault();
    this.$("form").toggleClass("hidden");
    this.$(".add-card").toggleClass("hidden");
    var card = $(event.target).serializeJSON();
    card.list_id = this.model.id;
    this.model.cards().create(card);
  }

});