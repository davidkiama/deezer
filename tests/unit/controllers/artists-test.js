import { module, test } from 'qunit';
import { setupTest } from 'deezer/tests/helpers';

module('Unit | Controller | artists', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:artists');
    assert.ok(controller);
  });
});
