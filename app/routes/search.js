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

    // Populating the Ember Data Store (creates records for all payload items)
    this.store.pushPayload(payload);

    // pushPayload does not return records, so we need to retrieve them from the store.
    const records = payload.data.map((item) =>
      this.store.peekRecord(item.type, item.id)
    );

    return { artistName, records };
  }
}
