import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://limitless-sierra-50857.herokuapp.com',

  pathForType() {
    return 'artist';
  },
});
