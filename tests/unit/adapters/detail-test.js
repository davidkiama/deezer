import { module, test } from 'qunit';
import { setupTest } from 'deezer/tests/helpers';

module('Unit | Adapter | detail', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:detail');
    assert.ok(adapter);
  });
});
