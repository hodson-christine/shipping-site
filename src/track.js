const trackButton = document.querySelector("#submitButton");
const trackInput = document.querySelector("#track");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0]; //wrongTrackNumModal
var wrongTrackNumModal = document.getElementById("wrongTrackNumModal");
let trackingNumber = document.querySelector(".trackingNumber");
let trackingNumberArray = [
	"co@rectD1@E#qr0.",
	"ghfvAC2!2eyn02E",
	"JBNO78ogb%^31kjb",
	"190uBH0.@4&&5",
];

const displayTrackDetails = () => {
	trackingNumber.innerHTML = `Tracking Number: ${trackInput.value}`;
	trackingNumberArray.includes(trackInput.value.trim())
			? (modal.style.display = "block")
			: (wrongTrackNumModal.style.display = "block");

	trackInput.value = "";
};

span.onclick = function () {
	modal.style.display = "none";
};

span1.onclick = function () {
	wrongTrackNumModal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal || event.target == wrongTrackNumModal) {
		modal.style.display = "none";
		wrongTrackNumModal.style.display = "none";
	}
};

trackButton.addEventListener("click", displayTrackDetails);
