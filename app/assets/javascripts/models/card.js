TrelloClone.Models.Card = Backbone.Model.extend({
  name: "card",
  urlRoot: "api/cards",
  parse: function(response) {
    if (response.items) {
      this.items().set(response.items, { parse: true });
      delete response.items;
    }

    return response;
  },
  items: function () {
    return this._items || (this._items = new TrelloClone.Collections.Items({}, { card: this }));
  }
});