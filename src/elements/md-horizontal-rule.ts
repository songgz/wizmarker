import {Markdown} from "../markdown";

export class MdHorizontalRule extends HTMLHRElement {

    constructor() {
        super();
        //this.style.cssText = 'border-bottom: 5px solid black';
        this.setAttribute('contenteditable','true');
        this.addEventListener('openInput', ()=> {
            console.log('yyyy');
            this.innerText = '---';
        });
        this.addEventListener('closeInput', this.close.bind(this));
    }

    close() {
        Markdown.factory(this);
    }

}
