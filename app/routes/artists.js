import Route from '@ember/routing/route';

export default class ArtistsRoute extends Route {
  async model() {
    let response = await fetch('http://localhost:5000/artists');

    let { data } = await response.json();
    console.log(data);

    return data;
  }
}
