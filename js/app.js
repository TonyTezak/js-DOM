/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

document.getElementById("name1").innerHTML = "Tay-Tay"

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
document.getElementById("position2").innerHTML = "Project Manager"

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
document.getElementById("alias3").innerHTML = "Concatenation"



/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var positionList = document.getElementsByClassName("profile");
positionList[0].innerHTML = "This is what it sounds like when doves code";


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var positionList = document.getElementsByClassName("profile");
positionList[1].innerHTML = "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var positionList = document.getElementsByClassName("alias");
positionList[2].innerHTML = "Frozone"



/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var peter = document.createElement('div');
peter.id = 'name7';
peter.innerHTML = "Peter Griffin";
nameParent.appendChild(peter);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var timDuncan = document.createElement('div');
timDuncan.id = 'alias8';
timDuncan.innerHTML = "Old Man Riverwalk";
nameParent.appendChild(alias8);

//Final Boss
/*9. Create your own profile.*/

