TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,
  url: "api/lists",
});

TrelloClone.Collections.lists = new TrelloClone.Collections.Lists();