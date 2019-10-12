var aText = new Array(
"...ell...?", 
"...",
"Ca...y...me?......",
"...",
"I...an...the...?",
"...",
"Hello?"
);

                                                          

var iSpeed = 1; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

var scene = 0;
// var counter = 0;

var options1Array = [
            "Yes. I hear you.", 
            "Why do they suspect it is you?", 
            "What can I do to help you?", 
            "Search the cameras", 
            "Check the body",
            "Go to the Lab",
            "Go to the Lab",
            "Wait, we need more evidence than that",
            " ",
            "Go to broadcast right now!",
            "Help the Scientist",
            " ",
            " ",
            "Knock out the scientist"];
var options2Array = [
            "Who is this?! How did you enter our airwaves?", 
            "What can I do to help you?", 
            "What can I do to help you?", 
            "Check the body", 
            "Check the room", 
            "Go to the Locker",
            "Go to the Locker",
            "Confront him NOW!",
            " ",
            "Confront him before you broadcast",
            "Leave him to die and broadcast",
            " ",
            " ",
            "Don't knock out"];
 
 

function typewriter(){
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   
   var destination = document.getElementById("typedtext");
   destination.style.position = "fixed";

   destination.style.margin = "20px";
  

  
   while ( iRow < iIndex ) {
       sContents += aText[iRow++] + '<br />';
    }
    
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   
   if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
       iIndex++;
      if ( iIndex != aText.length ) {
         iArrLength = aText[iIndex].length;
         setTimeout("typewriter()", 500);
      }else{
  	console.log("scene: " + scene);
  	// console.log("end of text");
      	document.getElementById('option1').style.display = "inline";
      	document.getElementById('option1').innerHTML = options1Array[scene];

      	document.getElementById('option2').style.display = "inline";
      	document.getElementById('option2').innerHTML = options2Array[scene];
  	// counter = counter + 1;
      }
    } else {
       setTimeout("typewriter()", iSpeed);

     }
}


typewriter();

window.setInterval(function() {
  var elem = document.getElementById('typedtext');
  elem.scrollTop = elem.scrollHeight;
}, 500);
