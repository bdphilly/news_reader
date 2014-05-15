window.NewsReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "blank",
    "feeds/:id": "show",
  },

  blank: function() {

  },

  initialize: function() {
    this.index();
  },

  index: function () {
    var feeds = NewsReader.Collections.feeds;
    feeds.fetch( {
      success: function(response) {
        var indexView = new NewsReader.Views.FeedsIndexView( {
          collection: feeds
        });
        $('#side-bar').html(indexView.render().$el);
      }
    });
  },

  show: function (id) {
    var feeds = NewsReader.Collections.feeds;
    var feed = feeds.getOrFetch(id);
    var showView = new NewsReader.Views.FeedView({model: feed});

    $('#content').html(showView.render().$el);
  },

  _swapView: function(view) {

  }


});