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
//console.log('got there');
/**
 * Define Global Variables
 * 
*/
const sectionAll = document.querySelectorAll("section");
const navTag = document.getElementById("navbar__list");
const sectionNavLength = sectionAll.length;
let sectionNavPositions = [];
//const screenSizeOffset = 100;

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
	let sectionIdVal = element.getAttribute("id");
	//setup object to build li tag
	let liTag = document.createElement("li");
	//set li tag class attr
	liTag.setAttribute("class", "menu__link" + index);
	//build anchor tag with onclick call to scrollToSection function 
	liTag.innerHTML = `<a href="#${sectionIdVal}">${sectionName}</a>`;
	console.log(liTag.innerHTML);
	//append li a tags to ul element
	navTag.appendChild(liTag);
});

// Add class 'active' to section when near top of viewport


//setup event listener function for page scroll
document.addEventListener("scroll", () => {
	// Section Positions Array
	sectionNavPositions = [];
	//loop thru element and put in sectionNavPositions array negative and it's out of the top of the viewport
	sectionAll.forEach((element) => sectionNavPositions.push(element.getBoundingClientRect().top + 50));
	// Adding and removing active sections
	console.log(sectionNavPositions.findIndex((element) => element > 0));	
	//setup addIndex with index of the section highest to smallest
	let addIndex = sectionNavPositions.findIndex((element) => element > 0);
	//setup loop - size, number of sections sectionNavLength
	for (let i = 0; i < sectionNavLength; i++) {
		//if addIndex is = to i add active else delete Active
		if (addIndex === i) {
			document.querySelector(".menu__link" + addIndex).classList.add("active");
			document.querySelector(`#section${addIndex + 1}`).classList.add("your-active-class");
		} else {
			document.querySelector(".menu__link" + i).classList.remove("active");
			document.querySelector(`#section${i + 1}`).removeAttribute("class");
		}
	}
	console.log(sectionNavPositions);
});

/**
 * End Main Functions
 * Begin Events
 * 
*/


