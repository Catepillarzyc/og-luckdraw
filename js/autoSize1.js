function autoSize () {
	var x=document.documentElement.clientWidth;
	document.body.style.zoom=x/640;
}
autoSize();
window.onresize=function () {
	autoSize();
}