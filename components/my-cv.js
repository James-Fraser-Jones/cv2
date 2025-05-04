const innerHTML = `
  <my-highlight>
    This text should be highlighted using the component's template structure and CSS.
    You can put <strong>any HTML</strong> inside here.
  </my-highlight>
  <p>Some other text</p>
`;

export class MyCV extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = innerHTML;
    const templateContent = templateElement.content.cloneNode(true);
    this.appendChild(templateContent);
  }
}

customElements.define('my-cv', MyCV);