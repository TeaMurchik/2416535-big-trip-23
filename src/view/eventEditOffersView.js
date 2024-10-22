import { createElement } from "../render";

function createEventEditOffers(offer){
    const {price, title} = offer;
    
    return `
    <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
    <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
    </label>
    </div>`;
}

export default class EventEditOffersView {
    constructor(offer){
       this.offer = offer;
    }

    getTemplate(){
        return createEventEditOffers(this.offer);
    }
    getElement(){
        if(!this.element){
            this.element = createElement(this.getTemplate());
        } return this.element;
    }
    removeElement(){
        this.element = null;
    }
}