import { module, test } from 'qunit';
import { setupTest } from 'deezer/tests/helpers';

module('Unit | Serializer | detail', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('detail');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('detail', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
