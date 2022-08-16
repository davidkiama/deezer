import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ArtistModel from '../models/artist';

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

    // Converting the payload to JSONAPI format
    // (for some reason store.pushPayload is not calling the normalizeArrayResponse
    // method on the serializer)
    const serializer = this.store.serializerFor('artist');
    const payloadJsonApi = serializer.normalizeArrayResponse(
      this.store,
      ArtistModel,
      payload,
      null,
      'query'
    );

    // Populating the Ember Data Store (creates records for all payload items)
    this.store.push(payloadJsonApi);

    // pushPayload does not return records, so we need to retrieve them from the store.
    const records = payload.data.map((item) =>
      this.store.peekRecord(item.type, item.id)
    );

    return { artistName, records };
  }
}
