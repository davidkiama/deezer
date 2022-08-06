import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
  async model(params) {
    const { artistName } = params;

    try {
      const response = await fetch(
        ' https://limitless-sierra-50857.herokuapp.com/search',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ artistName: artistName }),
        }
      );

      const { data } = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
