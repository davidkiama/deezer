import Route from '@ember/routing/route';

export default class DetailRoute extends Route {
  async model(params) {
    const { id } = params;

    try {
      let response = await fetch(
        `https://limitless-sierra-50857.herokuapp.com/artist/${id}`
      );

      const { albums, top, info } = await response.json();

      return { ...albums, ...top, info };
    } catch (error) {}
  }
}
