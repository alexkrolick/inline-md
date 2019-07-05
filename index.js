import marked from 'marked'

function parseMarkdownNodes() {
  for (var markdownElement of document.querySelectorAll('[data-markdown]')) {
    var mdText = markdownElement.innerHTML;
    markdownElement.innerHTML = marked(mdText);
  }
}

// the big side-effect
document.addEventListener('DOMContentLoaded', parseMarkdownNodes)

export default parseMarkdownNodes