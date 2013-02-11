//function to move the countries in another boxes.
function moveCountries(source, target) {
  var sr_box = document.getElementById(source);
	var selectedcountries = document.getElementById(source).options;
	var trgt_box = document.getElementById(target);
	while (selectedcountries.selectedIndex >= 0) {
		var select_text = selectedcountries[selectedcountries.selectedIndex].text;
 		var option = document.createElement("option");
		option.text = select_text;
		trgt_box.appendChild(option);
		sr_box.removeChild(selectedcountries[selectedcountries.selectedIndex]);
	}
}

