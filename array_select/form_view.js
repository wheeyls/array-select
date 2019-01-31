import Backbone from 'backbone';

const FormView = Backbone.View.extend({
  events: {
    'submit': 'handleSubmit'
  },

  inputField: function () {
    this._inputField = this._inputField || this.$el.find('input[type!="submit"]:first');
    return this._inputField;
  },

  handleSubmit: function (e) {
    e && e.preventDefault();
    e && e.stopPropagation();

    let value = this.inputField().val();

    if (value) {
      this.collection.add({ value: value });
      this.inputField().val('');
    }
  }
});

export default FormView;
