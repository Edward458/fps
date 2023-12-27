
// set up the canvas
let canvas: any;
let ctx: any;

function setUpCanvas()
{
	// get the canvas element
	canvas = document.querySelector('#canvas');
	// get canvas context
	ctx = canvas.getContext('2d');
}

function main()
{
	setUpCanvas();
	console.log(canvas,ctx);
}

main();
