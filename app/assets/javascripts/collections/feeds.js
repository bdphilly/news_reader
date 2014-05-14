window.NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/feeds",

  model: NewsReader.Models.Feed,

  getOrFetch: function (id) {
    var model;
    var feeds = this;

    if (model = this.get(id)) {
      model.fetch();
      return model;
    } else {
      model = new NewsReader.Models.Feed({id: id});
      model.fetch({
        success: function() { feeds.add(model) }
      });
      return model;
    }
  },
});