import {Markdown} from "../markdown";

export class MdCode extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('openInput', ()=> {
            this.innerText = "```" + this.innerText + "```";
        });
        this.addEventListener('closeInput', this.close.bind(this));
    }

    close() {
        Markdown.factory(this);
    }

}
