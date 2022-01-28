import {CloseInput, OpenInput} from "./elements/md-event";
import {MdParagraph} from "./elements/md-paragraph";
import {MdHeading1, MdHeading2, MdHeading3, MdHeading4, MdHeading5, MdHeading6} from "./elements/md-heading";
import {MdLi} from "./elements/md-li";
import {MdHorizontalRule} from "./elements/md-horizontal-rule";
import {MdBlockquote} from "./elements/md-blockquote";
import {MdCode} from "./elements/md-code";

customElements.define('md-h1', MdHeading1, { extends: 'h1' });
customElements.define('md-h2', MdHeading2, { extends: 'h2' });
customElements.define('md-h3', MdHeading3, { extends: 'h3' });
customElements.define('md-h4', MdHeading4, { extends: 'h4' });
customElements.define('md-h5', MdHeading5, { extends: 'h5' });
customElements.define('md-h6', MdHeading6, { extends: 'h6' });
customElements.define('md-p', MdParagraph, {extends: 'p'});
customElements.define('md-li', MdLi, { extends: 'li'});
customElements.define('md-hr', MdHorizontalRule, { extends: 'hr'});
customElements.define('md-blockquote', MdBlockquote, { extends: 'p'});
customElements.define('md-code', MdCode, { extends: 'code'});

export class MarkEditor {
    el: HTMLElement;
    current: HTMLElement | null = null;

    constructor(options?: Partial<MarkEditor>) {
        Object.assign(this, options);
        this.el = this.buildEditor();
        this.bindEvent();

    }

    buildEditor() {
        let el = document.getElementById('editor');
        if (!el) {
            el = document.createElement('div');
        }
        let me = document.createElement('p', {is: 'md-p'});
        me.innerHTML = '<br>';
        el.appendChild(me);
        return el;
    }

    bindEvent() {
        document.addEventListener('selectionchange', this.selectionChange.bind(this));
        this.el.addEventListener('keydown', this.keydown.bind(this));
    }

    keydown(e: KeyboardEvent) {
        if(e.shiftKey && e.key === 'Enter'){
            if (this.current?.tagName === 'LI') {
                let li = document.createElement('li', {is: 'md-li'});
                this.current.parentElement?.appendChild(li);
                li.dispatchEvent(OpenInput);

                let range = document.createRange();
                range.selectNodeContents(li);
                //range.setStartAfter(p);
                range.collapse(false);

                let selection = window.getSelection();
                selection?.removeAllRanges();
                selection?.addRange(range);

                e.preventDefault();
                return false;

            }
        }else if (e.key === 'Enter') {
            let p = document.createElement('p', {is: 'md-p'});
            p.innerHTML = '<br>';
            this.el.appendChild(p);
            let range = document.createRange();//Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(p);//Select the entire contents of the element with the range
            //range.setStartAfter(p);
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start

            let selection = window.getSelection();//get the selection object (allows you to change selection)
            selection?.removeAllRanges();//remove any selections already made
            selection?.addRange(range);//make the range you have just created the visible selection

            this.setCurrent(p);
            // prevent the default behaviour of return key pressed
            e.preventDefault();
            return false;
        }


    }

    selectionChange(e: Event) {
        let sel = window.getSelection();
        if (!sel?.rangeCount) {
            return void 0;
        }
        let rng = sel.getRangeAt(0);

        let node = rng.startContainer as HTMLElement;
        console.log(node);

        if (node.nodeType === 3) {
            let ele = node.parentNode as HTMLElement;
            console.log(ele);
            console.log('----------')
            console.log(this.current);

            if (this.current !== ele) {
                ele.dispatchEvent(OpenInput);
                this.setCurrent(ele);
            } else {
                ele.setAttribute('md', ele.innerText.trim());

            }

        }

    }

    private setCurrent(ele: HTMLElement) {
        this.current?.dispatchEvent(CloseInput);
        this.current = ele;
    }

    getCaretCharacterOffsetWithin() {
        let caretOffset = 0;
        const doc = this.el.ownerDocument || (this.el as any).document;
        const win = doc.defaultView || (doc as any).parentWindow;
        let sel;
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(this.el);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
            }
        } else if ((sel = (doc as any).selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = (doc.body as any).createTextRange();
            preCaretTextRange.moveToElementText(this.el);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;
    }

    setFocus() {
        const range = document.createRange();
        range.selectNodeContents(this.el);
        range.collapse(false);
        const sel = document.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
    }


}
