import Presenter from "./presenter/presenter";
import { render } from "./render";

const tripEvents = document.querySelector('.trip-events');

const presenter = new Presenter(tripEvents);
presenter.init();