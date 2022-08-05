import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GeneralContainerComponent extends Component {
  @tracked artistName = '';

  @action
  async search(e) {
    try {
      e.preventDefault();

      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ artistName: this.artistName }),
      });

      const { data } = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
