import {Markdown} from "../markdown";

export class MdParagraph extends HTMLParagraphElement {

    constructor() {
        super();
        this.addEventListener('closeInput', this.close.bind(this));
    }

    close() {
        Markdown.factory(this);
    }
}


