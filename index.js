function defineMacro(tagName, templateFn) {
  class MacroElement extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const children = Array.from(this.children).map(child => child.outerHTML);
      this.outerHTML = templateFn(children);
    }
  }
  customElements.define(tagName, MacroElement);
}

defineMacro('cv-section', (children) => /*html*/`
  <div class="flex flex-col gap-2">
    <div class="small-caps">${children[0]}</div>
    <div class="h-px bg-black"></div>
    ${children.slice(1).join('')}
  </div>
`);

defineMacro('cv-experience-section', (children) => /*html*/`
  <div class="flex gap-2">
    ${children[1]}
    <div class="flex flex-col gap-2">
      <div class="font-semibold">${children[0]}</div>
      ${children[2]}
    </div>
  </div>
`);

defineMacro('cv-education-section', (children) => /*html*/`
  <div class="flex gap-3 items-center">
    <div class="flex flex-col gap-1 items-center">
      ${children[0]}
      ${children[1]}
    </div>
    <div class="flex flex-col">
      <div class="font-semibold">${children[2]}</div>
      ${children[3]}
    </div>
  </div>
`);

defineMacro('cv-timeline', (children) => /*html*/`
  <div class="h-[150px] flex flex-col gap-2 items-center w-fit text-center">
    ${children[0]}
    <div class="grow w-px bg-black"></div>
    ${children[1]}
    <div class="grow w-px bg-black"></div>
    ${children[2]}
  </div>
`);

defineMacro('cv-list', (children) => /*html*/`
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
`);