const highlightTemplateHTML = /*html */`
  <style>
    /* Optional component-specific styles */
  </style>
  <span class="highlight-wrapper text-2xl">
    <div class="highlight-content"></div>
  </span>
`;

export class MyHighlight extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const originalContent = this.innerHTML;
    const templateElement = document.createElement('template');
    templateElement.innerHTML = highlightTemplateHTML;
    const templateContent = templateElement.content.cloneNode(true);
    const contentPlaceholder = templateContent.querySelector('.highlight-content');

    if (!contentPlaceholder) {
      console.error('<my-highlight>: Placeholder .highlight-content not found in template string!');
      this.innerHTML = '';
      this.appendChild(templateContent);
      return;
    }

    this.innerHTML = '';
    this.appendChild(templateContent);

    const insertedPlaceholder = this.querySelector('.highlight-content');
    if (insertedPlaceholder) {
      insertedPlaceholder.innerHTML = originalContent;
    } else {
      console.error('<my-highlight>: Could not find inserted placeholder after appending template!');
    }
  }
}

customElements.define('my-highlight', MyHighlight);