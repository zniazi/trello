TrelloClone.Models.List = Backbone.Model.extend({
  name: "list",
  urlRoot: "api/lists",
  parse: function(response) {
    if (response.cards) {
      var that = this;
      this.cards().set(response.cards, { parse: true });
      delete response.cards;
    }

    return response;
  },
  cards: function () {
    return this._cards || (this._cards = new TrelloClone.Collections.Cards({}, { list: this}));
  }
});