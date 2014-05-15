window.NewsReader.Views.FeedView = Backbone.View.extend({
  template: JST['feeds/show'],

  initialize: function() {
    this.listenTo(this.model,
                  "sync",
                  this.render
                 );
  },

  events: {
    "click button" : "refresh"
  },

  render: function() {
    var renderedContent = this.template({ model: this.model });
    this.$el.html(renderedContent);

    var entries = this.model.entries();
    var that = this;

    entries.each(function(entry) {
      var entryView = new NewsReader.Views.EntryView({ model: entry });
      that.$el.append(entryView.render().$el);
    })

    return this;
  },

  refresh: function() {
    alert("REFRESH");
    this.model.fetch();
  }

});