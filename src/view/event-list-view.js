import {createElement} from '../render.js';

function createEventTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class EventListView {
  getTemplate() {
    return createEventTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
