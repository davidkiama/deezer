import Model, { attr } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr('string') pictureBig;
  @attr('string') pictureMedium;
  @attr('string') pictureSmall;
  @attr('string') picture;
  @attr('string') name;
  @attr('number') nbFan;
  @attr('number') nbAlbum;
}
