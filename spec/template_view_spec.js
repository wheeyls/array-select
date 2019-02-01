import sinon from 'sinon';
import TemplateView from'array_select/template_view';
import Model from 'array_select/model';
import $ from 'jquery';

describe('array_select/template_view', function () {
  beforeEach(function () {
    const el = $('<div></div>');
    const model = new Model({ value: 25 });
    const text = '<div><span class="text-value">{{ value }}</span><span class="js-kill">x</span></div>';
    this.view = new TemplateView({ model, el, text });
  });

  describe('render', function () {
    it('should interpolate model value', function () {
      this.view.render();
      expect(this.view.$('.text-value').text()).to.equal('25');
    });
  });

  describe('removeModel', function () {
    it('should destroy model', function () {
      this.view.render();
      sinon.spy(this.view.model, 'destroy');
      this.view.$('.js-kill').trigger('click');
      expect(this.view.model.destroy).called;
    });
  });
});
