//your JS code here. If required.
const selectElement = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
	const indexOfOptions = selectElement.selectedIndex;

	if (indexOfOptions !== -1) {
	    selectElement.remove(indexOfOptions);
    }
});