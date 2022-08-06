import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @tracked artistName = '';
  @tracked sidebarDisplay = false;

  @service router;

  @action
  search(e) {
    e.preventDefault();
    this.router.transitionTo('search', this.artistName);
  }

  @action
  toggleSidebar() {
    this.sidebarDisplay = !this.sidebarDisplay;
  }
}
