export class Markdown {
    static regs: any[] = [
        {name: 'heading', rule: /^(\#{1,6})([^\#\n]+)$/m},
        {name: 'list', rule: /^((\s*)((\*|\-)|\d(\.|\))) ([^\n]+))/},
        {name: 'horizontal-rule', rule: /^(?:([\*\-_] ?)+)\1\1$/gm },
        {name: 'blockquote', rule: /^\> (.*$)/gim},
        {name: 'code', rule: /\`\`\`\n?([^`]+)\`\`\`/g}
    ];

    static match(str: string) {
        let result: any[]
        let mark: any = {name: 'paragraph', md: str, txt: str, tag: 'p'};
        for (let i = 0; i < Markdown.regs.length; i++) {
            result = Markdown.regs[i].rule.exec(str);
            console.log(result);
            if (result) {
                switch (Markdown.regs[i].name) {
                    case 'heading':
                        mark = {name: Markdown.regs[i].name, md: str, txt: result[2].trim(), tag: 'h' + result[1].length}
                        break;
                    case 'list':
                        console.log(result);
                        let tag = (result[4] === '*' || result[4] === '-') ? 'ul' : 'ol';
                        mark = {name: Markdown.regs[i].name, md: str, txt: result[6].trim(), tag: tag};
                        break;
                    case 'horizontal-rule':
                        mark = {name: Markdown.regs[i].name, md: str, txt: result[0].trim(), tag: 'hr'};
                        break;
                    case 'blockquote':
                        mark = {name: Markdown.regs[i].name, md: str, txt: result[1], tag: 'blockquote'};
                        break;
                    case 'code':
                        mark = {name: Markdown.regs[i].name, md: str, txt: result[1], tag: 'code'};
                        break;
                    default:

                        break;
                }
            }
        }

        return mark
    }

    static factory(el: HTMLElement) {
        let me: HTMLElement;
        let mark = Markdown.match(el.textContent || '');
        console.log(mark);
        switch (mark?.name) {
            case 'heading':
                if (el.tagName.toLowerCase() === mark.tag) {
                    el.innerText = mark.txt;
                }else {
                    me = document.createElement(mark.tag, {is: 'md-' + mark.tag});
                    me.setAttribute('md', mark.md);
                    me.innerText = mark.txt;
                    el.parentNode?.replaceChild(me, el);
                }

                break;
            case 'list':
                let tag = el.parentElement?.tagName;
                if (tag === 'UL' || tag === 'OL') {
                    el.innerText = mark.txt;
                }else{
                    let u = document.createElement(mark.tag);
                    let l = document.createElement('li', {is: 'md-li'});
                    l.setAttribute('md', mark.md);
                    l.innerText = mark.txt;
                    u.appendChild(l);
                    el.parentNode?.replaceChild(u, el);

                }
                break;
            case 'paragraph':
                if (el.tagName !== 'P') {
                    me = document.createElement('p', {is: 'md-p'});
                    me.innerText = mark.txt;
                    el.parentNode?.replaceChild(me, el);
                }
                break;
            case 'horizontal-rule':
                if (el.tagName !== 'HR') {
                    me = document.createElement('hr', {is: 'md-hr'});
                    el.parentNode?.replaceChild(me, el);
                }
                break;
            case 'blockquote':
                let tag1 = el.parentElement?.tagName;
                if (tag1 !== 'blockquote'.toUpperCase()) {
                    let q = document.createElement('blockquote');
                    q.style.cssText = 'border-left: 0.2rem solid #dfe2e5;';
                    let p = document.createElement('p', { is: 'md-blockquote'});
                    p.setAttribute('md', mark.md);
                    p.innerText = mark.txt;
                    q.appendChild(p);
                    el.parentNode?.replaceChild(q, el);
                }else {
                    el.innerText = mark.txt;
                }
                break;
            case 'code':
                if (el.tagName !== 'CODE') {
                    let p = document.createElement('pre');
                    let c = document.createElement('code', {is: 'md-code'});
                    c.innerText = mark.txt;
                    p.appendChild(c);
                    el.parentNode?.replaceChild(p, el);
                }else{
                    el.innerText = mark.txt;
                }
                break;
            default:
                break;
        }
    }

    static regexobject: any = {
        headline: /^(\#{1,6})([^\#\n]+)$/m,
        code: /\s\`\`\`\n?([^`]+)\`\`\`/g,
        hr: /^(?:([\*\-_] ?)+)\1\1$/gm,
        //lists:  /^((\s*((\*|\-)|\d(\.|\))) [^\n]+)\n)+/gm,

        list:  /^((\s*)((\*|\-)|\d(\.|\))) ([^\n]+))/,
        bolditalic: /(?:([\*_~]{1,3}))([^\*_~\n]+[^\*_~\s])\1/g,
        links: /!?\[([^\]<>]+)\]\(([^ \)<>]+)( "[^\(\)\"]+")?\)/g,
        reflinks: /\[([^\]]+)\]\[([^\]]+)\]/g,
        smlinks: /\@([a-z0-9]{3,})\@(t|gh|fb|gp|adn)/gi,
        mail: /<(([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,7}))>/gmi,
        tables: /\n(([^|\n]+ *\| *)+([^|\n]+\n))([\t ]*(:?\-+:?\|)+(:?\-+:?)*\n)((([^|\n]+ *\| *)+([^|\n]+)\n)+)/g,
        include: /[\[<]include (\S+) from (https?:\/\/[a-z0-9\.\-]+\.[a-z]{2,9}[a-z0-9\.\-\?\&\/]+)[\]>]/gi,
        url: /<([a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)>/g,
        url2: /[ \t\n]([a-zA-Z]{2,16}:\/\/[a-zA-Z0-9@:%_\+.~#?&=]{2,256}.[a-z]{2,4}\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)/g
    }



}
