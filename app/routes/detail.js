import Route from '@ember/routing/route';

export default class DetailRoute extends Route {
  async model(params) {
    const { id } = params;

    try {
      let response = await fetch(
        `https://limitless-sierra-50857.herokuapp.com/artist/${id}`
      );

      const { albums, top, info } = await response.json();

      //Add index to the top tracks

      const [tops] = Object.values(top);

      const mappedTops = tops.map((track, index) => {
        track.index = index + 1;
        return track;
      });

      return { ...albums, mappedTops, info };
    } catch (error) {}
  }
}
