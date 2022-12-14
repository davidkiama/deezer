import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    
    const { data } = payload;

    payload = { artists: data };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
