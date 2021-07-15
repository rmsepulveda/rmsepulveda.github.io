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
const sectionsLength = sectionAll.length;

/**
 * End Global Variables
 * Begin Nav Bar Build
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
	//append li/anchor tags to ul element
	navBarTag.appendChild(liTag);
});

/**
 * End Nav Bar Build
 * Begin Scroll Event Listener Function
 *
*/

//setup event listener function for page scroll
document.addEventListener("scroll", () => {
	// Create Section top Positions Array
	let sectionPositions = [];
	//loop thru element and put in sectionPositions array Top position of each section - negative and it's out of the top of the viewport
	sectionAll.forEach((element) => sectionPositions.push(element.getBoundingClientRect().top + 350));
	//console.log(sectionPositions);
	//setup addSectionIndex with index of the section - frist one it finds greater than 0 
	let addSectionIndex = sectionPositions.findIndex((element) => element > 0);
	//console.log(addSectionIndex);
	//setup loop - size, number of sections sectionsLength
	for (let i = 0; i < sectionsLength; i++) {
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
 * End Scroll Event Listener Function
 *
 * 
*/


