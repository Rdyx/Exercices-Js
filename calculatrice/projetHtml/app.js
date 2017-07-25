//methode1
var chiffre1 = parseInt($("#input1").val());
var chiffre2 = parseInt($("#input2").val());
var signe = $("#selectOperation").val();
$("#buttonForm").click(function method1(){
	var chiffre1 = parseInt($("#input1").val());
	var chiffre2 = parseInt($("#input2").val());
	var signe = $("#selectOperation").val();

	if(signe === "+"){
		$("#result").html(chiffre1 + chiffre2);
	} else if (signe === "-"){
		$("#result").html(chiffre1 - chiffre2);
	} else if (signe === "*"){
		$("#result").html(chiffre1 * chiffre2);
	} else {
		$("#result").html(chiffre1 / chiffre2);
	};
});


//methode2
// On réagit aux boutons en associant leur valeur à un tableau
var tableau = [];

$("#btn-calculer").click(function (){
	console.log(tableau);
	//En fonction du signe le calcul change
	if (tableau[1] === "+"){
		$("#result2").html(parseInt(tableau[0]) + parseInt(tableau[2]));
	} else if (tableau[1] === "-"){
		$("#result2").html(parseInt(tableau[0]) - parseInt(tableau[2]));
	} else if (tableau[1] === "*"){
		$("#result2").html(parseInt(tableau[0]) * parseInt(tableau[2]));
	} else {
		$("#result2").html(parseInt(tableau[0]) / parseInt(tableau[2]));
	}
});

$('button').click(function (){
  var tabSum = $(this).text();
  tableau.push(tabSum);
});









//old
// $("#btn-1").click(function (){
// 	tableau.push(1);
// 	console.log(tableau);
// });
// $("#btn-2").click(function (){
// 	tableau.push(2);
// 	console.log(tableau);
// });
// $("#btn-3").click(function trois(){
// 	tableau.push(3);
// });
// $("#btn-4").click(function quatre(){
// 	tableau.push(4);
// });
// $("#btn-5").click(function cinq(){
// 	tableau.push(5);
// });
// $("#btn-6").click(function six(){
// 	tableau.push(6);
// });
// $("#btn-7").click(function sept(){
// 	tableau.push(7);
// });
// $("#btn-8").click(function huit(){
// 	tableau.push(8);
// });
// $("#btn-9").click(function neuf(){
// 	tableau.push(9);
// });
// $("#btn-0").click(function zero(){
// 	tableau.push(0);
// });
// $("#btn-plus").click(function plus(){
// 	tableau.push("+");
// });
// $("#btn-minus").click(function moins(){
// 	tableau.push("-");
// });
// $("#btn-times").click(function fois(){
// 	tableau.push("*");
// });
// $("#btn-divide").click(function divise(){
// 	tableau.push("/");
// });
