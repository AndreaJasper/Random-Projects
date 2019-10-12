var slider = document.getElementById("debt");
var output = document.getElementById("monthvalue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function divideBy() {
	debt = document.getElementById("debt").value;
	income = document.getElementById("income").value;
	document.getElementById("total").innerHTML = Math.round(debt / income * 100);
}
