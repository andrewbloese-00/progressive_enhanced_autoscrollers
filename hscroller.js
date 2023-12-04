/**
 * @typedef {{speed: "slow"|"medium"|"fast", direction: "left" | "right" , }} ScrollerOptions
 * @typedef {{alt:string,url:string}} ImageWithAlt
*/

const DEFAULT_SCROLLER_OPTIONS = { 
	direction: "right",
	speed: "medium"
}
const prefersReduced = window.matchMedia("(prefers-reduced-motion:reduce)").matches

/**
 * @param {Node[]} scrollerChildren,
 * @param {ScrollerOptions} options
 */
function HorizontalInfiniteScroller(scrollerChildren,options=DEFAULT_SCROLLER_OPTIONS){
	
	const scroller = document.createElement("div")
	scroller.className = "blaze__scroller";

	if(options.direction === "left") {
		scroller.setAttribute("data-direction", "left");
	}
	if(options.speed){
		scroller.setAttribute("data-speed", options.speed)
	}

	//initialize the scroll contents
	const scrollerInner = document.createElement("ul");
	for(let scrollerChild of scrollerChildren){
		scrollerInner.appendChild(scrollerChild)
	}
	//need to duplicate
	if(!prefersReduced){
		for(let scrollerChild of scrollerChildren){
			let copy = scrollerChild.cloneNode(true)
			copy.setAttribute("aria-hidden",true)
			scrollerInner.appendChild(copy);
		}
	}

	scrollerInner.className = "blaze__scroller-inner";
	//when user is not opting into reduced motion, we animate the scroller, otherwise it just wraps
	if(!prefersReduced){
		scroller.setAttribute("data-animated", true);
	}
	scroller.appendChild(scrollerInner);
	
	return scroller;
}


/**
 * 
 * @param {string[]} arrayOfText 
 * @param {ScrollerOptions} options 
 * @returns {HTMLDivElement}
 */
function createScrollerOfText(arrayOfText,options=DEFAULT_SCROLLER_OPTIONS){
	const listElements = [] 
	for(let i = 0; i < arrayOfText.length; i++){
		let node = document.createElement("li");
		node.textContent = arrayOfText[i];
		listElements.push(node);
	}
	return HorizontalInfiniteScroller(listElements,options);
}

/**
 * 
 * @param {ImageWithAlt[]} imagesWithAltText 
 * @param {ScrollerOptions} options 
 * @returns {HTMLDivElement}
 */
function createScrollerOfImages(imagesWithAltText=[],options=DEFAULT_SCROLLER_OPTIONS){
	const scrollerImages = [];
	for(const imgDef of imagesWithAltText){
		const img = document.createElement("img");
		img.src=imgDef.url;
		img.alt = imgDef.alt;
		scrollerImages.push(img);
	}
	return HorizontalInfiniteScroller(scrollerImages,options);
}