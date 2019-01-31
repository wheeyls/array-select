/**
 * ArraySelect widget
 *
 * Use case: you have an array of simple items. This widget
 * can be used to add and remove items from that array.
 *
 * It doesn't know anything about persistence, but it can be output
 * into a form pretty easily.
 *
 * Usage:
 *
 * Add items with a simple form. The input name will be used to identity
 * the array in other views.
 *
 * <form ue='array-select'
 *       data-array-select-init="[1, 2, 3]"
 *       data-array-select-name='unique-name'>
 *   <input type='text' class='js-input'>
 *   <button>Add Items</button>
 * </form>
 *
 * You can choose a base element to reflect the current list, by attaching
 * the -each variant of the widget to a wrapping div, with a script tag containing
 * a template inside of it:
 *
 * <table ue='array-select-each' data-array-select-each-name='unique-name'>
 *    <script type='text/widget-template'>
 *      <tr>
 *        <td>{{ value }}</td>
 *        <!-- clicking .js-kill will remove the item from the list -->
 *        <td><div class='js-kill'>x</div></td>
 *      </tr>
 *    </script>
 * </table>
 *
 * You can use this to build lists, tables, or even populate a form with
 * hidden checkboxes, like so:
 *
 * <form>
 *   <div class='is-hidden' ue='array-select-each' data-array-select-each-name='unique-name'>
 *     <script type='text/widget-template'>
 *       <input type='checkbox'
 *              checked='checked'
 *              value='{{ value }}'
 *              name='model[attribute_name][]'>
 *     </script>
 *   </div>
 * </form>
 */

import widget from 'widget';
import TemplateCollectionView from 'array_select/template_collection_view';
import FormView from 'array_select/form_view';
import SharedData from 'array_select/shared_data';

const sharedData = new SharedData();

widget('array-select', function (opts) {
  sharedData.get(opts.name, opts.init).then((collection) => {
    new FormView({ el: this.get(0), collection: collection }, opts);
  });
});

widget('array-select-each', function (opts) {
  sharedData.get(opts.name, opts.init).then((collection) => {
    new TemplateCollectionView({ el: this.get(0), collection: collection }, opts);
  });
});
