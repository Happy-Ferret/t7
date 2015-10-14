import { setTemplate }       from './cacheControl';
import parseHtml             from './parseHtml';
import buildCompiledTemplate from './buildCompiledTemplate';

export default function createTemplate(templateKey, templateStrings, values, t7instance) {
    let fullHtml = '';
    //put our placeholders around the template parts
    for (let i = 0, n = templateStrings.length; i < n; i++) {
        if (i === templateStrings.length - 1) {
            fullHtml += templateStrings[i];
        } else {
          fullHtml += templateStrings[i] + "__$props__[" + i + "]";
        }
    }
    //parse the HTML and generate HTML
    let ast = parseHtml(fullHtml);
    let compiledTemplate = buildCompiledTemplate(ast, templateKey, t7instance);

    if (t7instance.getPrecompile() === true) {
        return {
          templateKey: templateKey,
          template: 'return ' + compiledTemplate
        }
    } else {
        let functionString = '"use strict";var __$props__ = arguments[0];'
            + 'var t7 = arguments[1];return ' + compiledTemplate;
        let template = new Function(functionString);
        setTemplate(templateKey, template);
        return template;
    }
}