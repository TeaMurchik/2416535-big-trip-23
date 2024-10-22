import Presenter from "./presenter/presenter";
import PointModel from "./model/pointModel";

const tripEvents = document.querySelector('.trip-events');
const pointModel = new PointModel();

pointModel.init();

const presenter = new Presenter(tripEvents, pointModel);
presenter.init();