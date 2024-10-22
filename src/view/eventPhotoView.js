import { createElement } from "../render";

function createEventPhoto(picture){
    const {description, src} = picture;
    return `<img class="event__photo" src=${src} alt="${description}">`;
}

export default class EventPhotoView{
    constructor(picture){
        this.picture = picture;
    }

    getTemplate(){
        return createEventPhoto(this.picture);
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