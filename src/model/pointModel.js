import { destinations } from "../mock/destinations";
import { offers } from "../mock/offers";
import { points } from "../mock/points";

export default class PointModel {
    constructor(){
        this.points = [];
        this.destinations = [];
        this.offers = [];
    }
    init(){
        this.offers = offers;
        this.points = points;
        this.destinations = destinations;
    }
    getPoints(){
        return this.points;
    }
    getOffers(){
        return this.offers;
    }
    getDestinations(){
        return this.destinations;
    }

}