document.addEventListener("keydown", function (event) {

    let kcode= String.fromCharCode(event.which);piano.
	//console.log("code=",kcode);

  if (kcode == "Z" || kcode == "X" ||kcode == "C" ||kcode == "V" ||kcode == "B" ||kcode == "N" ||kcode == "M")
  {
    a=a+kcode;
	document.getElementById('output').value=a;
	console.log("The '", kcode, "' key is pressed.");
	playKey(kcode);
  }

});