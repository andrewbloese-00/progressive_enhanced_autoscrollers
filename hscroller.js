/**
 * @typedef {{speed: "slow"|"medium"|"fast", direction: "left" | "right" , }} ScrollerOptions
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
function HorizontalInfiniteScroller(scrollerChildren,options){
	
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
	if(!prefersReduced){
		for(let scrollerChild of scrollerChildren){
			let copy = scrollerChild.cloneNode(true)
			scrollerInner.appendChild(copy);
		}
	}


	scrollerInner.className = "blaze__scroller-inner";
	//when user is not opting into reduced motion, we animate the scroller, otherwise it just wraps
	if(!prefersReduced){
		scroller.setAttribute("data-animated", true);
	}
	scroller.appendChild(scrollerInner)
	
	return scroller
}






function createScrollerOfText(arrayOfText,options=DEFAULT_SCROLLER_OPTIONS){
	const listElements = [] 
	for(let i = 0; i < arrayOfText.length; i++){
		let node = document.createElement("li")
		node.textContent = arrayOfText[i]
		listElements.push(node)
	}
	return HorizontalInfiniteScroller(listElements,options)
}


function createScrollerOfImages(imagesWithAltText={},options=DEFAULT_SCROLLER_OPTIONS){
	const scrollerImages = []
	for(let alt in images){
		const img = document.createElement("img")
		img.src=images[alt];
		img.alt = alt;
		scrollerImages.push(img)
	}
	return HorizontalInfiniteScroller(scrollerImages,{
		speed: "fast",
		direction: "left"
	})



}