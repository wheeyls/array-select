import SharedData from 'array_select/shared_data';
import Collection from 'array_select/collection';

describe('get / set', function () {
  beforeEach(function () {
    this.subject = new SharedData();
  });

  it('has a promise style for set', function (done) {
    this.subject.set('new-value', [1, 2, 3]).then(function (collection) {
      expect(collection).to.be.an.instanceof(Collection);
      expect(collection.length).to.equal(3);
      done();
    });
  });

  it('can be called out of order', function (done) {
    this.subject.get('new-value').then(function (collection) {
      expect(collection).to.be.an.instanceof(Collection);
      expect(collection.length).to.equal(3);
      done();
    });

    this.subject.set('new-value', [1, 2, 3]);
  });

  it('should consistently return the same collection', function (done) {
    this.subject.set('new-value', [1]);

    this.subject.get('new-value').then((collection1) => {
      this.subject.get('new-value').then(function (collection2) {
        expect(collection1).to.equal(collection2);
        done();
      });
    });
  });

  describe('get', function () {
    describe('with values passed', function () {
      it('creates a new collection', function (done) {
        this.subject.get('new-value', [1, 2, 3]).then(function (collection) {
          expect(collection).to.be.an.instanceof(Collection);
          expect(collection.length).to.equal(3);
          done();
        });
      });
    });
  })
});
