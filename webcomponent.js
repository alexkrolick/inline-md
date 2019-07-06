import marked from 'marked'
import redent from 'redent'

class MarkdownText extends HTMLElement {
  connectedCallback() {
    const inputMarkdown = this.innerHTML;
    // If the script tag executes before the document has finished mounting,
    // the innerHTML of the markdown-text elements will be empty
    // In that case, retry after 1 tick
    // NOTE: it might be better to listen for the DOMContentLoaded event here
    if (inputMarkdown === '') {
      window.setTimeout(() => this.parseHTML(), 0)
    } else {
      this.parseHTML()
    }
  }

  attributeChangedCallback() {
    this.parseHTML()
  }

  adoptedCallback() {
    this.parseHTML()
  }

  parseHTML() {
    const inputMarkdown = this.innerHTML;
    const shadow = this.attachShadow({mode: 'open'});
    const parsedHtmlContainer = document.createElement('div')
    parsedHtmlContainer.innerHTML = marked(redent(inputMarkdown))
    shadow.appendChild(parsedHtmlContainer)
  }
}

customElements.define('markdown-text', MarkdownText);

export default MarkdownText