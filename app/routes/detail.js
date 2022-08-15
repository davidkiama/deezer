import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DetailRoute extends Route {
  @service store;

  async model(params) {
    const dataClass = await this.store.findRecord('detail', params.id);

    const { albums, top, info } = await dataClass;

    //Add index to the top tracks
    const [tops] = Object.values(top);
    const mappedTops = tops.map((track, index) => {
      track.index = index + 1;
      return track;
    });

    return { ...albums, mappedTops, info };
  }
}
