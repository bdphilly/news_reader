window.NewsReader.Models.Entry = Backbone.Model.extend ({
  parse: function (payload) {
    _.extend(payload, JSON.parse(payload.json));
    return payload;
  },
});