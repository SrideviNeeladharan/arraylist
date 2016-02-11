//create an array literal(Best practice)
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];
console.log(colorList);

//Methods

//sort the colors
colorList.sort();//sorts the array alphabetically
console.log(colorList);

colorList.reverse();
console.log(colorList);

colorList.pop();//removes the last element & returns the element
var newColor = colorList.pop();//returns & holds the element in a var
colorList.push();//adds a new element to the end of the array list
colorList.shift(); // removes the first elemnt in the array list
colorList.unshift("brown");// adds the front/beginning of the array list
colorList.splice(0,2);//takes out 1 or more elements from the array list
//first argument is the STARTING position
//second argument is How Many to take out
colorList.splice(2,1,"olive","navy");// takes out elements and adds new elements in the 2nd index position
 //var random= Math.floor(Math.random() * imageListA.length);
//randomly removes an item from the list



console.log(colorList[5]);

//make a list of scores (numbers)

var scores = [12,2,5,69,47,48,85,98,45,794,145,58,56,74,37];


                  

//variables IN functions (function scope), can see global varibles)
var myThumbsDiv= document.getElementById("thumbs");

var imageListA = [];
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = new Array();
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = new Array();
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";



//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
  
    output += '<div class="thumbs_block">';
	for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
    output += '</div>';
	output += '<div class="thumbs_block">';
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
    output += '</div>';
 	output += '<div class="thumbs_block">';
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
    output += '</div>';
	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}





window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};


//get the thumb div and assign
myThumbsDiv.addEventListener("click", onImageClick, false);//attach a click event to the div

//the function handler
function onImageClick(evt)
{
 /*console.log(evt.target); //brings back just the element that gets clicked
  evt.target.setAttribute("src", "images/drawing/thumbs/artwork_22.jpg");
  evt.target.setAttribute("class", "images/drawing/thumbs/artwork_15.jpg");
  evt.target.setAttribute("style","display:none;");
  evt.target.setAttribute("style", "padding-top:10px;");*/

var imageIndex = imageListA.indexOf("images/drawing/thumbs/artwork_1.jpg");
console.log(imageIndex);
}