import { module, test } from 'qunit';
import { setupTest } from 'deezer/tests/helpers';

module('Unit | Model | artist', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('artist', {});
    assert.ok(model);
  });
});
