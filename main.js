



var firstName = "robyn";
var lastName = "gilbert";
var age = 28;
var family = ["cindi", "mitch", "corey", "lisa", "brett"];

function calculateFutureAge(){
	return age + 20;
};
function completeMessage(){
	return firstName + " " + lastName + " is " + age +".";
};

//document.getElementById('first_name').innerHTML = firstName;	//this is wrong


r

function setValue(id, text){
	document.getElementById(id).value = text;
}

// function setText(id, text){
// 	var el = document.getElementById(id);
// 	if(el instanceof HTMLInputElement){
// 		el.value = text;
// 	}else{
// 		el.innerHTML = text;
// 	}
// }

function onLoad(){
	setValue("first_name", firstName);
	setValue("last_name", lastName);
	setValue("age", age);
	setValue("future_age", calculateFutureAge());
	setValue("family", family);
	setValue("message", completeMessage());
	setInnerHtml("output","I am innerHTML!!!!");

	//ohai riblet,
	//instead of what you have above, you could use the setText function i 
	//created above (commented out) and have it figure out whether 
	//to set innerHTML or value based on type of element
}


// other options:

// for(var i in family){
// 		document.getElementById('family').value += family[i] + ", ";
// 	}


// <button id="thing" onClick="onLoad">Click Me</button>


// // var fill = function(){
// // 	document.getElementBy("first_name").innerHTML = firstName;
// // 	document.getElementBy("last_name").innerHTML = lastName;
// // }




// //   function simulateLogin(userName)
// //         {
// //             var firstName = document.getElementById("first_name");
// //             firstName.value = userName;
// //             var goButton = document.getElementById("go");
// //             goButton.click();
// //         }


//     	document.getElementById('first_name').innerHTML = firstName;
// };
// myFunction();

