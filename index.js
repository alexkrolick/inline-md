import marked from 'marked'
import redent from 'redent'

function parseMarkdownNodes() {
  for (var markdownElement of document.querySelectorAll('[data-markdown]')) {
    var mdText = markdownElement.innerHTML;
    markdownElement.innerHTML = marked(redent(mdText));
  }
}

// the big side-effect
document.addEventListener('DOMContentLoaded', parseMarkdownNodes)

export default parseMarkdownNodes