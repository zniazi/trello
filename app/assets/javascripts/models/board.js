TrelloClone.Models.Board = Backbone.Model.extend({
  name: "board",
  urlRoot: "api/boards",
  parse: function(response) {
    if (response.lists) {
      this.lists().set(response.lists, { parse: true });
      delete response.lists;
    }

    return response;
  },
  lists: function () {
    return this._lists || (this._lists = new TrelloClone.Collections.Lists({}, { board: this }));
  }
});


App = window.App = function () {

}