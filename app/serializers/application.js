import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';


export default class ApplicationSerializer extends RESTSerializer {
  keyForAttribute(attrFromModel) {
    return underscore(attrFromModel);
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    // This converts an array of records [{type: 'artist'}, {type: album}]
    // into a map like this: {artists: [], albums: []}
    const payloadProcessed = payload.data.reduce((recordsMap, item) => {
      const modelName = pluralize(item.type);
      recordsMap[modelName] = [...(recordsMap[modelName] || []), item];
      return recordsMap;
    }, {});

    debugger

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
