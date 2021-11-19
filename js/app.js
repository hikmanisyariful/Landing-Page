/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections;
let navbarUl = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Create new section
const addNewSection = () => {
  let number = document.getElementsByTagName("section").length + 1;
  const main = document.getElementById("main");
  main.innerHTML += `
    <section id="section${number}" data-nav="Section ${number}" class="your-active-class">
      <div class="landing__container">
        <h2>Section ${number}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          fermentum metus faucibus lectus pharetra dapibus. Suspendisse
          potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
          lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
          convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
          eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
          nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
          lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
          tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
          vitae elit. Integer nec libero venenatis libero ultricies molestie
          semper in tellus. Sed congue et odio sed euismod.
        </p>
        <p>
          Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
          gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
          Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
          consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
          elementum tortor mollis non.
        </p>
      </div>
    </section>
  `;

  sections = document.querySelectorAll("section");
};

// Generate list items of navbar
const generateListItems = () => {
  // Loop NodeList[]
  sections.forEach(section => {
    const linkName = section.getAttribute("data-nav");
    const sectionId = section.getAttribute("id");
    const navbarLi = document.createElement("li");
    navbarLi.innerHTML += `
      <a class="menu__link" href="#${sectionId}">${linkName}</a>
    `;
    navbarUl.appendChild(navbarLi);
  });
};

// Add new section
addNewSection();
addNewSection();

// build the nav
generateListItems();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
