window.NewsReader.Views.FeedView = Backbone.View.extend({
  template: JST['feeds/show'],

  // initialize: function() {
  //   this.listenTo(this.collection,
  //                 "add change:title remove reset sync",
  //                 this.render
  //                );
  // },

  render: function() {
    var renderedContent = this.template({ model: this.model });
    this.$el.html(renderedContent);
    return this;
  }

});