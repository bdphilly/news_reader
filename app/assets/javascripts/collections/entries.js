window.NewsReader.Collections.Entries = Backbone.Collection.extend({
  //url: "/feeds/",

  model: NewsReader.Models.Entry,

  // getOrFetch: function (id) {
  //   var model;
  //   var feeds = this;
  //
  //   if (model = this.get(id)) {
  //     model.fetch();
  //     return model;
  //   } else {
  //     model = new NewsReader.Models.Entry({id: id});
  //     model.fetch({
  //       success: function() { feeds.add(model) }
  //     });
  //     return model;
  //   }
  // },
});