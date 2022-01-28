import {Markdown} from "../markdown";

export class MdHeading extends HTMLHeadingElement {

    constructor() {
        super();
        this.addEventListener('openInput', ()=> {
            let level = Number(this.tagName.slice(1,2));
            console.log('===' + level);
            let str = '';
            for (let i=0; i<level; i++) {
                str += '#'
            }
            this.innerText = str + ' ' + this.innerText;
        });
        this.addEventListener('closeInput', this.close.bind(this));
    }

    close() {
        Markdown.factory(this);
    }

}

export class MdHeading1 extends MdHeading {}
export class MdHeading2 extends MdHeading {}
export class MdHeading3 extends MdHeading {}
export class MdHeading4 extends MdHeading {}
export class MdHeading5 extends MdHeading {}
export class MdHeading6 extends MdHeading {}


