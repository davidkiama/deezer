import Model, { attr } from '@ember-data/model';

export default class ArtistModel extends Model {
  // @attr('string') picture-big;
  // @attr('string') picture-medium;
  // @attr('string') picture-small;
  @attr('string') picture;
  @attr('string') name;
  @attr('string') album;
  @attr('string') fans;
}
