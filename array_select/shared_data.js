import registry from 'util/deferred_registry';
import Collection from 'array_select/collection';

class SharedData {
  set(name, values) {
    let result = new Collection();
    values.forEach((i) => { result.add({ value: i }); });

    return this.registry().register(name, result);
  }

  get(name, values) {
    if (values === undefined || values === null) {
      return this.registry().get(name);
    } else {
      return this.set(name, values);
    }
  }

  registry() {
    this.reg = this.reg || registry();
    return this.reg;
  }
}

export default SharedData;
