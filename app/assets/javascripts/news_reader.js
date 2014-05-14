window.NewsReader = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},
  initialize: function() {
    window.NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();

    new NewsReader.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});