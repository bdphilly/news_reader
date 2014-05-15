window.NewsReader.Models.Feed = Backbone.Model.extend ({
  urlRoot: "/feeds",

  parse: function(jsonResp) {
    if (jsonResp.entries) {
      this.entries().set(jsonResp.entries, { parse: true });
      delete jsonResp.entries;
    }
    return jsonResp;
  },

  entries: function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries([], {
        feed: this
      });
    }
    return this._entries;
  },

});