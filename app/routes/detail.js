import Route from '@ember/routing/route';

export default class DetailRoute extends Route {
  async model(params) {
    const { id } = params;

    try {
      let response = await fetch(`http://localhost:5000/artist/${id}`);
      const { albums, top, info } = await response.json();
      console.log(info);

      return { ...albums, ...top, info };
    } catch (error) {}
  }
}
