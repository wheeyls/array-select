import $ from 'jquery';
import FormView from 'array_select/form_view';
import Collection from 'array_select/collection';

describe('FormView', function () {
  describe('with a simple input', function () {
    beforeEach(function () {
      this.$el = $('<form><input type="text" class="js-value" /></form>');
      this.collection = new Collection();
      this.view = new FormView({ el: this.$el.get(0), collection: this.collection });
    });

    describe('submitting the form', function () {
      it('adds the item to the collection', function () {
        this.$el.find('.js-value').val('test-value');
        this.$el.submit();

        expect(this.collection.length).to.equal(1);
        expect(this.collection.first().get('value')).to.equal('test-value');
      });

      it('clears the input', function () {
        this.$el.find('.js-value').val('test-value');
        this.$el.submit();

        expect(this.$el.find('.js-value').val()).to.equal('');
      });

      describe('when input is blank', function () {
        it('does nothing', function () {
          this.$el.submit();
          expect(this.collection.length).to.equal(0);
        });
      });
    });
  });
});
