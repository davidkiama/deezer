import Model, { attr } from '@ember-data/model';

export default class DetailModel extends Model {
  @attr albums;
  @attr info;
  @attr top;
}
