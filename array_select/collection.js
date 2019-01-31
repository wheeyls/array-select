import Backbone from 'backbone';
import Model from 'array_select/model';

const Collection = Backbone.Collection.extend({ model: Model });

export default Collection;
