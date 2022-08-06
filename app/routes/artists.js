import Route from '@ember/routing/route';

export default class ArtistsRoute extends Route {
  async model() {
    try {
      let response = await fetch(
        'https://limitless-sierra-50857.herokuapp.com/artists'
      );

      let { data } = await response.json();

      return { data };
    } catch (error) {
      return error;
    }
  }
}
