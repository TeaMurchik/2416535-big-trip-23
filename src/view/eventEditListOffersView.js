import { createElement } from "../render";

function eventEditListOffers(){
    return `<div class="event__available-offers"></div>`;
}

export default class EventEditListOffersView{
    getTemplate(){
        return eventEditListOffers();
    }
    getElement(){
        if(!this.element){
            this.element = createElement(this.getTemplate());
        } return this.element;
    }
    removeElement(){
        this.element=null;
    }
}