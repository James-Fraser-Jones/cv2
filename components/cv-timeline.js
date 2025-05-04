export class CVTimeLine extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const children = Array.from(this.children).map((child) => child.outerHTML);
    this.outerHTML = /*html*/`
      <div class="h-[150px] flex flex-col gap-2 items-center w-fit text-center">
        ${children[0]}
        <div class="grow w-px bg-black"></div>
        ${children[1]}
        <div class="grow w-px bg-black"></div>
        ${children[2]}
      </div>
    `;
  }
}

customElements.define('cv-timeline', CVTimeLine);