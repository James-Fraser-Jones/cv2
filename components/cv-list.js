export class CVList extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const children = Array.from(this.children).map((child) => child.outerHTML);
    this.outerHTML = /*html*/`
      <div class="flex flex-col gap-2">
        ${
          children.map((child) => /*html*/`
            <div class="flex gap-2 items-baseline">
              <i class="fa-solid fa-angle-right"></i>
              ${child}
            </div>
          `).join('')
        }
      </div>
    `;
  }
}

customElements.define('cv-list', CVList);