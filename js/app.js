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
 * Define Global Variables
 * 
*/
const sectionAll = document.querySelectorAll("section");
const navBarTag = document.getElementById("navbar__list");
const sectionNavLength = sectionAll.length;
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

// Loop thru each section to build the nav
sectionAll.forEach((element, index) => {
	//Grab section data-nav name attr
	let sectionName = element.getAttribute("data-nav");
	//Grab section id attr
	let sectionIdVal = element.getAttribute("id");
	//setup object to build li tag
	let liTag = document.createElement("li");
	//set li tag class attr
	liTag.setAttribute("class", "menu__link" + index);
	//build anchor tag with href to section id attr and section data-nav attr
	liTag.innerHTML = `<a href="#${sectionIdVal}">${sectionName}</a>`;
	//append li a tags to ul element
	navBarTag.appendChild(liTag);
});

// Add class 'active' to section when near top of viewport

//setup event listener function for page scroll
document.addEventListener("scroll", () => {
	// Section Positions Array
	let sectionNavPositions = [];
	//loop thru element and put in sectionNavPositions array Top position of each section - negative and it's out of the top of the viewport
	sectionAll.forEach((element) => sectionNavPositions.push(element.getBoundingClientRect().top + 50));
	console.log(sectionNavPositions);
	//setup addSectionIndex with index of the section
	let addSectionIndex = sectionNavPositions.findIndex((element) => element > 0);
	console.log(addSectionIndex);
	//setup loop - size, number of sections sectionNavLength
	for (let i = 0; i < sectionNavLength; i++) {
		//if addSectionIndex is = to i add active to the menu link and to section class - else remove menu class active and section class attr
		if (addSectionIndex === i) {
			document.querySelector(".menu__link" + addSectionIndex).classList.add("active");
			document.querySelector(`#section${addSectionIndex + 1}`).classList.add("your-active-class");
		} else {
			document.querySelector(".menu__link" + i).classList.remove("active");
			document.querySelector(`#section${i + 1}`).removeAttribute("class");
		}
	}
});

/**
 * End Main Functions
 * Begin Events
 * 
*/


