import {Markdown} from "../markdown";

export class MdBlockquote extends HTMLParagraphElement {

    constructor() {
        super();
        this.addEventListener('openInput', ()=> {
            console.log(this.getAttribute('md'));
            this.innerText = '> ' + this.innerText;
            if (this.parentElement?.tagName === 'blockquote'.toUpperCase()) {
                this.parentElement.style.cssText = '';
            }
        });
        this.addEventListener('closeInput', this.close.bind(this));

    }

    close() {
        if (this.parentElement?.tagName === 'blockquote'.toUpperCase()) {
            this.parentElement.style.cssText = 'border-left: 0.2rem solid #dfe2e5;';
        }
        Markdown.factory(this);
    }

}
