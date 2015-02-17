
var firstName= "Robyn";
var lastName= "Gilbert";
var age=28;

var futureAge = age + 20;
// need to .sort() first for the following to work...
var family = ["Mitch", "Cindi", "Corey", "Sammy the Cat"];
family = family.sort();
var familyReversed = family.slice().reverse();

var setText = function (id,text){  
  // if not text, then text should be empty 
  if(!text) text = '';
  document.getElementById(id).innerHTML= text;
};



var myFunction= function(){
  setText('first_name',firstName);
  setText('last_name',lastName);
  setText('age',age);
  setText('future_age', futureAge);
  setText('family', family);
  setText('reverse_family', familyReversed);
  setText('message',firstName + " " + lastName + " is " + age + ".");
  
  if(age>30){
	setText("message2", firstName + " is old.");
  } else{
	setText("message2", firstName + " is not yet 30.");
	}
};

var reset = function(){
  setText('first_name');
  setText('last_name');
  setText('age');
  setText('future_age');
  setText('family');
  setText('reverse_family');
  setText('message');
  setText('message2');
};