export class CVEducationSection extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const children = Array.from(this.children).map((child) => child.outerHTML);
    this.outerHTML = /*html*/`
      <div class="flex gap-2">
        <div class="flex flex-col gap-2">
          ${children[0]}
          ${children[1]}
        </div>
        <div class="flex flex-col gap-2">
          ${children[2]}
          ${children[3]}
        </div>
      </div>
    `;
  }
}

customElements.define('cv-education-section', CVEducationSection);