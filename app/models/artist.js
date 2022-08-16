import Model, { attr } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr('string') picture_big;
  @attr('string') picture_medium;
  @attr('string') picture_small;
  @attr('string') picture;
  @attr('string') name;
  @attr('number') nb_fan;
  @attr('number') nb_album;
}
