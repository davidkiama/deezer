import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export default class ArtistsRoute extends Route {
  @tracked loading = true;
  async model() {
    this.loading = true;
    try {
      let response = await fetch('http://localhost:5000/artists');

      let { data } = await response.json();
      console.log(data);
      if (data.length > 1) this.loading = false;

      return { loading: this.loading, data };
    } catch (error) {
      return error;
    }
  }
}
