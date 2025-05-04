export class CVSection extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const children = Array.from(this.children).map((child) => child.outerHTML);
    this.outerHTML = /*html*/`
      <div class="flex flex-col gap-2">
        <div class="small-caps">${children[0]}</div>
        <div class="h-px bg-black"></div>
        ${children.slice(1).join('')}
      </div>
    `;
  }
}

customElements.define('cv-section', CVSection);