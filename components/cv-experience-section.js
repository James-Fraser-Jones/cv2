export class CVExperienceSection extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const children = Array.from(this.children).map((child) => child.outerHTML);
    this.outerHTML = /*html*/`
      <div class="flex gap-2">
        ${children[1]}
        <div class="flex flex-col gap-2">
          ${children[0]}
          ${children[2]}
        </div>
      </div>
    `;
  }
}

customElements.define('cv-experience-section', CVExperienceSection);