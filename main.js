
var firstName= "Robyn";
var lastName= "Gilbert";
var age=28;
var futureAge = age + 20;



var setText = function (id,text){  
  // if no text, then text should be empty //
  if(!text) text = '';
  document.getElementById(id).innerHTML= text;
}
var myFunction= function(){
  			setText('first_name',firstName);
  setText('last_name',lastName);
  setText('age',age);
};

var reset = function(){
  setText('first_name');
  setText('last_name');
  setText('age');
};
