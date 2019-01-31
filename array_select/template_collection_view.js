import Backbone from 'backbone';
import TemplateView from 'array_select/template_view';
import Mustache from 'vendor/mustache';

const TemplateCollectionView = Backbone.View.extend({
  initialize: function (options) {
    this.text = options.text || this.$el.find('script').html();
    Mustache.parse(this.text);

    this.$el.html('');
    this.collection.forEach((model) => { this.setupView(model); });
    this.listenTo(this.collection, 'add', this.setupView);
  },

  setupView: function (model) {
    let view = new TemplateView({ model: model, text: this.text });
    view.render();
    this.$el.append(view.$el);
  }
});

export default TemplateCollectionView;
