function anyElems(elems, pred) {
	for (let i=0; i<elems.length; i++) {
		if (pred(elems[i])) { return true; }
	}
	return false;
}

function mapElems(elems, f) {
	for (let i=0; i<elems.length; i++) { f(elems[i]); }
}

let isBlurred = grade => grade.style.filter.match(/blur/);
let unblur = grade => grade.style.filter = "";

function removeWarningMessage(item) {
	if (item.childElementCount == 0 && item.textContent.match(/We have reduced your focus until a later time/)) {
		item.remove();
	}
}

let grades = document.getElementsByClassName("grade");
let all = document.getElementsByTagName("*");
if (
	anyElems(grades, isBlurred) &&
	confirm("It looks like your grades are being blurred by Canvas 😞. Do you want me to unblur them for you?"))
{
	mapElems(grades, unblur);
	mapElems(all, removeWarningMessage);
}
