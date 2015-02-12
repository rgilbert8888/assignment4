



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

//document.getElementById('first_name').innerHTML = firstName;

function setText(id,text){
	document.getElementById(id).value = text;
}

function onLoad(){
	setText("first_name", firstName);
	setText("last_name", lastName);
	setText("age", age);
	setText("future_age", calculateFutureAge());
	setText("family", family);
	setText("message", completeMessage());
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

