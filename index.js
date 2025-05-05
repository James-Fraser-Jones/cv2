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
  <div class="flex flex-col gap-1">
    <div class="flex items-center">
      <div class="h-px bg-black w-[5px]"></div>
      <!-- <div class="small-caps text-xl tracking-wider">${children[1]}</div>
      <div class="h-px bg-black w-[5px]"></div> -->
      <div class="small-caps text-xl tracking-wider text-brand">${children[0]}</div>
      <div class="h-px bg-black grow"></div>
    </div>
    ${children.slice(1).join('')}
  </div>
`);

defineMacro('cv-experience-section', (children) => /*html*/`
  <div class="flex gap-2">
    ${children[1]}
    <div class="flex flex-col gap-1">
      ${children[0]}
      <div class="ml-2">${children[2]}</div>
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
  <div class="flex flex-col items-center w-[70px] shrink-0 text-center">
    ${children[0]}
    <div class="grow w-px bg-black min-h-[1em]"></div>
    ${children[1]}
  </div>
`);

defineMacro('cv-list', (children) => /*html*/`
  <div class="flex flex-col">
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