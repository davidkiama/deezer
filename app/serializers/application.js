import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends RESTSerializer {
  keyForAttribute(attrFromModel) {
    return underscore(attrFromModel);
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    // This converts an array of records [{type: 'artist'}, {type: album}]
    // into a map like this: {artists: [], albums: []}
    const payloadProcessed = payload.data.reduce((recordsMap, item) => {
      recordsMap[item.type] = [...(recordsMap[item.type] || []), item];
      return recordsMap;
    }, {});

    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payloadProcessed,
      id,
      requestType
    );
  }

  normalizeSingleResponse(store, primaryModelClass, payload) {
    return this.normalize(primaryModelClass, payload);
  }

}
