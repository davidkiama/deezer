import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const dataClass = await this.store.findAll('artist');

    const data = dataClass.map((item) => {
      return {
        id: item.id,
        name: item.name,
        fans: item.nb_fan,
        picture_big: item.picture_big,
        picture_medium: item.picture_medium,
        picture_small: item.picture_small,
        picture: item.picture,
      };
    });

    return data;
  }
}
