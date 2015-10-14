let valid = {

    'abbr': true,
    'acronym': true,
    'address': true,
    'applet': true,
    'area': true,
    'article': true,
    'aside': true,
    'audio': true,
    'base': true,
    'basefont': true,
    'bdi': true,
    'bdo': true,
    'br': true,
    'canvas': true,
    'caption': true,
    'center': true,
    'col': true,
    'colgroup': true,
    'details': true,
    'dfn': true,
    'dialog': true,
    'dir': true,
    'dl': true,
    'dt': true,
    'embed': true,
    'fieldset': true,
    'figcaption': true,
    'font': true,
    'footer': true,
    'form': true,
    'frame': true,
    'frameset': true,
    'h3': true,
    'h4': true,
    'h5': true,
    'h6': true,
    'head': true,
    'hader': true,
    'img': true,
    'input': true,
    'keygen': true,
    'li': true,
    'link': true,
    'main': true,
    'map': true,
    'mark': true,
    'menu': true,
    'menuitem': true,
    'meta': true,
    'meter': true,
    'nav': true,
    'noframes': true,
    'noscript': true,
    'object': true,
    'ol': true,
    'option': true,
    'output': true,
    'param': true,
    'pre': true,
    'progress': true,
    'q': true,
    'rp': true,
    'rt': true,
    'ruby': true,
    'script': true,
    'section': true,
    'select': true,
    'small': true,
    'source': true,
    'strike': true,
    'strong': true,
    'style': true,
    'sub': true,
    'summary': true,
    'sup': true,
    'table': true,
    'tbody': true,
    'td': true,
    'textarea': true,
    'tfoot': true,
    'th': true,
    'thread': true,
    'time': true,
    'title': true,
    'tr': true,
    'track': true,
    'tt': true,
    'u': true,
    'ul': true,
    'var': true,
    'video': true,
    'wbr': true,
    'web-component': true,

    // SVG

    'animate': true,
    'animateColor': true,
    'animateMotion': true,
    'circle': true,
    'clipPath': true,
    'color-profile': true,
    'cursor': true,
    'defs': true,
    'ellipse': true,
    'filter': true,
    'font': true,
    'font-face': true,
    'g': true,
    'glyph': true,
    'glyphRef': true,
    'line': true,
    'linearGradient': true,
    'marker': true,
    'mask': true,
    'path': true,
    'pattern': true,
    'polygon': true,
    'polyline': true,
    'radialGradient': true,
    'rect': true,
    'stop': true,
    'svg': true,
    'switch': true,
    'symbol': true,
    'text': true,
    'textPath': true,
    'title': true,
    'tref': true,
    'tspan': true,

    // MathML

    'abbrev': true,
    'title': true,
    'abstract': true,
    'ack': true,
    'line': true,
    'aff': true,
    'alternatives': true,
    'alt - title': true,
    'anonymous': true,
    'app': true,
    'app - group': true,
    'article - title': true,
    'attrib': true,
    'award - id': true,
    'bio': true,
    'body': true,
    'bold': true,
    'boxed - text': true,
    'chapter - title': true,
    'chem - struct': true,
    'collab': true,
    'comment': true,
    'compound - kwd - part': true,
    'conf - acronym': true,
    'conf - loc': true,
    'conf - name': true,
    'conf - num': true,
    'conf - sponsor': true,
    'conf - theme': true,
    'copyright - statement': true,
    'corresp': true,
    'def - head': true,
    'degrees': true,
    'disp - formula': true,
    'disp - quote': true,
    'edition': true,
    'element - citation': true,
    'email': true,
    'etal': true,
    'ext - link': true,
    'fax': true,
    'funding - source': true,
    'funding - statement': true,
    'given - names': true,
    'glossary': true,
    'gov': true,
    'history': true,
    'inline - formula': true,
    'inline - supplementary - material': true,
    'institution': true,
    'issue': true,
    'issue - part': true,
    'issue - sponsor': true,
    'issue - title': true,
    'italic': true,
    'journal - subtitle': true,
    'journal - title': true,
    'kwd': true,
    'label': true,
    'license - p': true,
    'meta - name': true,
    'meta - value': true,
    'mixed - citation': true,
    'monospace': true,
    'named - content': true,
    'notes': true,
    'on - behalf - of': true,
    'overline': true,
    'part - title': true,
    'patent': true,
    'phone': true,
    'prefix': true,
    'preformat': true,
    'product': true,
    'publisher - loc': true,
    'publisher - name': true,
    'ref - list': true,
    'related - article': true,
    'related - object': true,
    'role': true,
    'roman': true,
    'sans - serif': true,
    'sc': true,
    'sec': true,
    'self - uri': true,
    'series': true,
    'series - text': true,
    'series - title': true,
    'sig': true,
    'sig - block': true,
    'source': true,
    'speaker': true,
    'std': true,
    'strike': true,
    'string - conf': true,
    'string - date': true,
    'string - name': true,
    'styled - content': true,
    'sub': true,
    'subject': true,
    'subtitle': true,
    'suffix': true,
    'sup': true,
    'supplement': true,
    'surname': true,
    'target': true,
    'term': true,
    'term - head': true,
    'textual - form': true,
    'title': true,
    'trans - abstract': true,
    'trans - source': true,
    'trans - subtitle': true,
    'trans - title': true,
    'underline': true,
    'unstructured - kwd - group': true,
    'uri': true,
    'verse - line': true,
    'volume': true,
    'volume - id': true,
    'volume - series': true,
    'xref': true
};

function validtags(tag) {
    switch (tag) {
        case 'a':
        case 'button':
        case 'div':
        case 'em':
        case 'form':
        case 'img':
        case 'h1':
        case 'h2':
        case 'li':
        case 'ol':
        case 'p':
        case 'span':
        case 'table':
        case 'ul':
        case 'svg':
            return true;
        default:

            return valid[tag] ? true : false;
    }
};

export default validtags;