# progressive_enhanced_autoscrollers
A handful of javascript functions and css styles to build progressively enhanced horizontal autoscrollers. 

## Types
### ScrollerOptions 
ScrollerOptions are objects with the following fields:
* speed:string -> "slow"|"medium"|"fast"
* direction:string -> "left"|"right"
> All scrollers not provided options default to medium speed and right direction

### ImageWithAlt
An `ImageWithAlt` object has the following fields
* url:string -> a url to the image
* alt:string -> the alt text to attach to the image

## Functions
### HorizontalInfiniteScroller( scrollerChildren , options )
**Args**
* scrollerChildren:HTMLElement[]
* options:ScrollerOptions
**Returns**
* HTMLDivElement -> the scroller with all children and animations


### createScrollerOfText( arrayOfText , options )
**Args**
* arrayOfText:string[] -> an array of short strings to add to the scroller
* options:ScrollerOptions
**Returns**
* HTMLDivElement -> the scroller with all text converted into `li` children

### createScrollerOfImages( imagesWithAlt , options )
**Args**
* imagesWithAlt:ImageWithAlt[] -> list of the images to be in the scroller, along with their corresponding alt tag
* options:ScrollerOptions
**Returns**
* HTMLDivElement -> the scroller with provided images as `img` children


## Usage 
For usage of these functions check out the Demo in the `index.html` page
