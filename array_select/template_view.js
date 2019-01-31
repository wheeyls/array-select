import Mustache from 'vendor/mustache';
import Backbone from 'backbone';
import $ from 'jquery';

const TemplateView = Backbone.View.extend({
  initialize: function (opts) {
    this.text = opts.text;
    this.listenTo(this.model, 'remove', this.remove);
  },

  events: {
    'click .js-kill': 'removeModel'
  },

  render: function () {
    const html = Mustache.render(this.text, this.model.toJSON());
    this.setElement($(html));
  },

  removeModel: function (e) {
    e && e.preventDefault();
    this.model.destroy();
  }
});

export default TemplateView;
