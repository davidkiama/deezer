import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SearchRoute extends Route {
  @service store;

  async model(params) {
    const { artistName } = params;

    const response = await fetch(
      ' https://limitless-sierra-50857.herokuapp.com/search',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ artistName: artistName }),
      }
    );

    const { data: payload } = await response.json();

    // This converts an array of records [{type: 'artist'}, {type: album}]
    // into a map like this: {artists: [], albums: []}
    const payloadProcessed = payload.data.reduce((recordsMap, item) => {
      recordsMap[item.type] = [...(recordsMap[item.type] || []), item];
      return recordsMap;
    }, {});

    // Populating the Ember Data Store (creates records for all payload items)
    this.store.pushPayload(payloadProcessed);

    // pushPayload does not return records, so we need to retrieve them from the store.
    const records = payload.data.map((item) =>
      this.store.peekRecord(item.type, item.id)
    );

    return { artistName, records };
  }
}
