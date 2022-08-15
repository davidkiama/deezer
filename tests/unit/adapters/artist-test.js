import { module, test } from 'qunit';
import { setupTest } from 'deezer/tests/helpers';

module('Unit | Adapter | artist', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:artist');
    assert.ok(adapter);
  });
});
