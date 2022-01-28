import {Markdown} from "../markdown";

export class MdLi extends HTMLLIElement {

    constructor() {
        super();
        this.innerHTML = '<br>';
        this.addEventListener('openInput', ()=> {
            let tag: string = this.parentElement?.tagName || '';
            let str = ''
            switch (tag) {
                case 'UL':
                    str = '*';
                    break;
                case 'OL':
                    let index
                    if (this.parentElement) {
                        index = [...this.parentElement?.children].indexOf(this);
                        str = index + '.';
                    }
                    break;
            }
            this.innerText = str + ' ' + this.innerText;
            this.style.cssText = 'list-style:none';
        });
        this.addEventListener('closeInput', this.close.bind(this));
    }

    close() {
        this.style.cssText = '';
        Markdown.factory(this);

    }

    add() {
        let li = document.createElement('li', {is: 'md-li'});
        this.parentElement?.appendChild(li);
    }
}


