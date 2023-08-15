import {render, RenderPosition} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import EventPresenter from './presenter/events-presenter.js';

const tripMainContainer = document.querySelector('.trip-main');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const eventPresenter = new EventPresenter({boardContainer: siteMainElement});

render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteHeaderElement);

eventPresenter.init();
