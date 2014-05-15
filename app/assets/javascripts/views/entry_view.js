window.NewsReader.Views.EntryView = Backbone.View.extend({
  template: JST['feeds/entry'],

  render: function() {
    var renderedContent = this.template({ entry: this.model });
    this.$el.html(renderedContent);
    return this;
  },

});