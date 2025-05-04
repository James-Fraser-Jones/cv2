const innerHTML = /*html*/`
  <div class="min-h-screen w-full flex items-center justify-center bg-gray-100 p-16 overflow-hidden">
    <div class="bg-white a4 shadow-xl overflow-auto">
      <div>
        <div>
          <div>James Fraser-Jones</div>
          <div>Full-Stack Software Engineer</div>
          <div>London, UK</div>
        </div>
        <div>
          <div><a href="mailto:james@fraser-jones.co.uk"><i class="fa-solid fa-envelope"></i> james@fraser-jones.co.uk</a></div>
          <div><a href="tel:+447940350499"><i class="fa-solid fa-phone"></i> +44 7940 350 499</a></div>
          <div><a href="https://linkedin.com/in/james-fraser-jones"><i class="fa-brands fa-linkedin"></i> linkedin.com/in/james-fraser-jones</a></div>
          <div><a href="https://github.com/James-Fraser-Jones"><i class="fa-brands fa-github"></i> github.com/James-Fraser-Jones</a></div>
        </div>
        <div>TS/JS • React • Node • ASP.NET • SQL • Python • Angular • AWS • Git • Linux • C/C++</div>
      </div>
      <div>
        <div><i class="fa-solid fa-suitcase"></i> Experience</div>
        <div>
          <div>
            <div>Full-Stack Engineer</div>
            <div>
              <div>Present</div>
              <div><a href="https://deepmind.google/">Google Deepmind</a> - Contracting via <a href="https://www.yunojuno.com/">YunoJuno</a></div>
              <div>Jan 2024</div>
            </div>
            <div>
              <div>...</div>
              <div>...</div>
              <div>...</div>
            </div>
          </div>
          <div>
            <div>C++ Developer</div>
            <div>
              <div>Dec 2023</div>
              <div><a href="https://inseinc.com/">Inspired Entertainment</a></div>
              <div>Feb 2023</div>
            </div>
            <div>
              <div>Enhanced codebase reliability through targeted refactoring of problematic classes and interfaces, decreasing related Jira issues raised by QA by ∼40%</div>
              <div>Made extensive use of debugging tools to pinpoint and resolve numerous game-breaking bugs, whilst working under tight release schedules</div>
              <div>Leveraged the Python ecosystem to streamline data hand-over procedures, strengthening collaboration with other departments</div>
            </div>
          </div>
          <div>
            <div>Full-Stack Developer & CS/Maths Tutor</div>
            <div>
              <div>Feb 2023</div>
              <div>Freelance</div>
              <div>Aug 2019</div>
            </div>
            <div>
              <div>Employed responsive design principles and dynamic layouts using flexbox and grid, to revamp legacy UIs and vastly improve usability on mobile devices</div>
              <div>Used my expertise with APIs, databases and containerization to aid in the planning and execution of a large monolith-to-microservices migration project</div>
              <div>Applied deep understanding of the subject matter to deliver comprehensive tutoring for a range of ages and abilities, from KS3 to undergraduate level</div>
            </div>
          </div>
          <div>
            <div>Full-Stack React/ASP.NET Developer</div>
            <div>
              <div>Aug 2019</div>
              <div><a href="https://www.sparkdata.co.uk/">Spark Data Systems</a></div>
              <div>Sept 2018</div>
            </div>
            <div>
              <div>Engaged in rapid iteration with the UI/UX team, promptly integrating client reviews to promote usability, develop priority features and resolve issues</div>
              <div>Utilised SQL optimization, indexing, and caching, to achieve 50% reduced query response times for several high-traffic client databases</div>
              <div>Proposed and implemented dynamic documentation features for our products, clarifying their usage and functionality, to the benefit of clients and colleagues</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div><i class="fa-solid fa-mortar-board"></i> Education</div>
        <div>
          <div>
            <div>
              <div><a href="https://bristol.ac.uk/">University of Bristol</a></div>
              <div>2014 - 2018</div>
            </div>
            <div>
              <div>BSc Computer Science</div>
              <div>Haskell Lambda-Cube Interpreter</div>
              <div>Functional Programming, Type Theory</div>
            </div>
          </div>
          <div>
            <div>
              <div><a href="https://cadcol.ac.uk/">Cadbury College</a></div>
              <div>2012 - 2014</div>
            </div>
            <div>
              <div>A Levels</div>
              <div>Maths, Further Maths</div>
              <div>Physics, Computing AS</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div><i class="fa-solid fa-laptop"></i> Projects</div>
        <div>
          <div>
            <div><a href="https://www.fraser-jones.co.uk/projects/circuit">Circuit</a></div>
            <div>A fully-fledged parser, and call-by-name evaluator, for <a href="https://en.wikipedia.org/wiki/Lambda_calculus">Lambda Calculus</a></br>Uses a novel method to generate circuit-like diagrams that clarify the binding structure of lambda terms</div>
            <div>Typescript • React • Node • AWS • Haskell • Stack <a href="https://github.com/James-Fraser-Jones/circuit"><i class="fa-brands fa-github"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <i class="fa-solid fa-tasks"></i>
  <i class="fa-solid fa-map-marker"></i>
  <i class="fa-solid fa-link"></i>
  <i class="fa-solid fa-angle-right"></i> -->
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