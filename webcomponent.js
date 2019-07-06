import marked from 'marked'
import redent from 'redent'

class MarkdownText extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: 'open'});
    this.parsedHtmlContainer = document.createElement('div');
    shadow.appendChild(this.parsedHtmlContainer)
  }

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
    this.parsedHtmlContainer.innerHTML = marked(redent(inputMarkdown).replace(/&gt;+/g, '>'))
  }
}

customElements.define('markdown-text', MarkdownText);

export default MarkdownText