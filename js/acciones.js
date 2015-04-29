// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$('#btnvibrar').on('tap',function(){
	navigator.vibrate(1000);
});
 //tap a btnvibrar
$('#btnbeep').on('tap',function(){
	navigator.beep(1);
});

$('#izquierda').on('swipeleft', function(){
	alert("barrio a la Izquierda");
});

$('#derecha').on('swiperight', function(){
	alert("barrio a la Derecha");
});

}); 
});

