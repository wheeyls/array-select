import $ from 'jquery';
import TemplateCollectionView from 'array_select/template_collection_view';
import Collection from 'array_select/collection';

describe('TemplateCollectionView', function () {
  describe('with a populated collection', function () {
    beforeEach(function () {
      this.$el = $('<div><script type="text/template"><div>{{ value }}</div></script></div>');
      this.collection = new Collection([{ value: 1 }, { value: 2 }]);
      this.view = new TemplateCollectionView({ el: this.$el.get(0), collection: this.collection });
    });

    it('should render the template once for each item', function () {
      expect(this.view.$el.html()).to.equal('<div>1</div><div>2</div>');
    });

    describe('when the collection changes', function () {
      it('should render the template once for each item', function () {
        let model = this.collection.add({ value: 3 });
        expect(this.view.$el.html()).to.equal('<div>1</div><div>2</div><div>3</div>');

        this.collection.remove(model);
        expect(this.view.$el.html()).to.equal('<div>1</div><div>2</div>');
      });
    });
  });
});
