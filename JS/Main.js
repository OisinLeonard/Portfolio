var prevCalc = []
let list = document.getElementById("answers");


function clearField() {
	document.getElementById("text-input").value = "";
}
	
function clearAll() {
	document.getElementById("text-input").value = "";
	document.getElementById("answers").innerHTML = "";
	prevCalc = []
}

function display(val) {
	document.getElementById('text-input').value += val;

}

function calculate() {
	var x = document.getElementById("text-input").value;
	var y = eval(x);
	document.getElementById("text-input").value = y;
	prevCalc.unshift(y)
	document.getElementById("answers").innerHTML = "<ul>" + prevCalc + "</ul>";

}
