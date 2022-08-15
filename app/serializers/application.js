// import RESTSerializer from '@ember-data/serializer/rest';

import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { data } = payload;
    console.log(data);

    const newData = [];

    data.forEach((artist) => {
      const newArtist = {};
      for (let [key, value] of Object.entries(artist)) {
        key = key.replace('_', '-');
        newArtist[key] = value;
      }
      newData.push(newArtist);
    });
    payload = { artists: newData };

    console.log(payload);

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});

// import JSONAPISerializer from '@ember-data/serializer/json-api';
// export default class ApplicationSerializer extends JSONAPISerializer {}
