import EventEditView from "../view/eventEditView";
import EventEditOffersView from "../view/eventEditOffersView";
import EventEditListOffersView from "../view/eventEditListOffersView";
import TripEventsItemView from "../view/tripEventsItemView";
import TripEventsListView from "../view/tripEventsListView";
import TripFiltersView from "../view/tripFiltersView";
import TripSortView from "../view/tripSortView";
import { render } from "../render";
import EventPhotoView from "../view/eventPhotoView";

const TripEvList = new TripEventsListView();
const EvListOffers = new EventEditListOffersView();

export default class Presenter {
    constructor(boardContainer, pointsModel){
        this.pointsModel = pointsModel;
        this.boardContainer = boardContainer;
    }
    
    init(){
        const filtersContainer = document.querySelector('.trip-controls__filters');
        render(new TripFiltersView(), filtersContainer);

        const points = this.pointsModel.getPoints();
        const offers = this.pointsModel.getOffers();
        const destinations = this.pointsModel.getDestinations();

        const randPoint = Math.floor(Math.random() * 3);
        const currentDestination = destinations.find(destination => points[randPoint].destination == destination.id);
        const currentOffer = offers.find(offer => points[randPoint].type == offer.type);

        render(new TripSortView(), this.boardContainer);
        
        render(TripEvList, this.boardContainer);
        const tripEventsList = document.querySelector('.trip-events__list');
        render(new EventEditView(points[randPoint], currentDestination), tripEventsList);

        const photoContainer = document.querySelector('.event__photos-tape');
        currentDestination.pictures.forEach(picture => {
            render(new EventPhotoView(picture), photoContainer);
        });
        
        const eventSectionOffers = document.querySelector('.event__section--offers');
        render(EvListOffers, eventSectionOffers);
        const listOffers = document.querySelector('.event__available-offers');
        currentOffer.offers.forEach((offer)=>{
            render(new EventEditOffersView(offer), listOffers);
        });
        
        points.forEach((point)=>{
            render(new TripEventsItemView(point, offers, destinations), tripEventsList);
        });
    }
}