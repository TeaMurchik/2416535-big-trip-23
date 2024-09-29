import EventEditView from "../view/eventEditView";
import { render } from "../render";
import TripEventsItemView from "../view/tripEventsItemView";
import TripEventsListView from "../view/tripEventsListView";
import TripFiltersView from "../view/tripFiltersView";
import TripSortView from "../view/tripSortView";

const TripEvList = new TripEventsListView();
export default class Presenter {
    constructor(boardContainer){
        this.boardContainer = boardContainer;
    }
    
    init(){
        const filtersContainer = document.querySelector('.trip-controls__filters');
        render(new TripFiltersView, filtersContainer);
        render(new TripSortView(), this.boardContainer);
        render(TripEvList, this.boardContainer);
        const container = document.querySelector('.trip-events__list');
        render(new EventEditView(), container)
        for(let i=0; i<3; i++){
            render(new TripEventsItemView(), container);
        }
    }
}