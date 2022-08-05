import Route from '@ember/routing/route';

export default class DetailRoute extends Route {
  async model(params) {
    const { id } = params;

    try {
      let response = await fetch(`http://localhost:5000/artist/${id}`);
      const { albums, top } = await response.json();

      return { ...albums, ...top };
    } catch (error) {}
  }
}
