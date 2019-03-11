//AANMAAK VARIABELEN
var vandaag = new Date();

var maanden = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dagen = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var formatDate =  dagen[vandaag.getDay()] + " " + vandaag.getDate() + " " + maanden[vandaag.getMonth()] + " " + vandaag.getFullYear();

var klok = document.getElementById('digitaleKlok');  


//DIGITALE KLOK
function uren(){
	var vandaag = new Date();
	var uren = vandaag.getHours();
	uren = checkTijd(uren);
	document.getElementById('uren').innerHTML = uren; //de uren worden op het scherm laten zien
	var tijd = setTimeout('uren()', 500); //de uren lopen
}

function minuten(){
	var vandaag = new Date();
	var minuten = vandaag.getMinutes();
	minuten = checkTijd(minuten);
	document.getElementById('minuten').innerHTML = minuten; //minuten worden op het scherm laten zien
	var tijd2 = setTimeout('minuten()', 500); //de minuten lopen
}

function seconden(){
	var vandaag = new Date();
	var seconden = vandaag.getSeconds();
	seconden = checkTijd(seconden);
	document.getElementById('seconden').innerHTML = seconden; //de seconden worden laten zien
	var tijd3 = setTimeout('seconden()', 500); //de seconden lopen
}


//ZORGEN DAT ER SPRAKE IS VAN DE LEADING ZERO
function checkTijd(number){
		if(number<10){
			return "0" + number;
		}
		else{
			return number;
		}
	} 


//VISUEEL MAKEN VAN DAG EN NACHT
function veranderAchtergrond(){
	var vandaag = new Date();
	var uren = vandaag.getHours();
	var minuten = vandaag.getMinutes();
	var seconden = vandaag.getSeconds();
	minuten = checkTijd(minuten);
	seconden = checkTijd(seconden);

	var achtergrond = document.getElementsByTagName("BODY")[0];
	document.getElementById("body").style.backgroundSize = "1600px 1020px";

		if(uren>=22 && uren<=6){
			document.getElementById('body').style.backgroundImage = 'url(nacht.jpeg)';
		}
		else if(uren>=7 && uren<=11){
			document.getElementById('body').style.backgroundImage = 'url(ochtend.jpeg)';
		}
		else if(uren>=12 && uren<=17){
			document.getElementById('body').style.backgroundImage = 'url(overdag.jpeg)';
		}
		else if(uren>=18 && uren<=21){
			document.getElementById('body').style.backgroundImage = 'url(avondvalt.jpeg)';
		}
}


//ANITMATIE

// var datum = document.getElementById('digitaleKlok');
// var bewegingDatum = new TimelineMax();
// bewegingDatum.from(datum, 4, {fontSize: 12, opacity: 20});

function animatieMinuten(){
	var vandaag = new Date();
	var minuten = vandaag.getMinutes();
	var seconden = vandaag.getSeconds();
	minuten = checkTijd(minuten);
	seconden = checkTijd(seconden);

	var vergroten = document.getElementById('seconden');
	var animatie = new TimelineMax({repeat : -1});
	// animatie.from(vergroten, 0.8, {fontSize: 45});

	var mediaquerie639 = window.matchMedia("(max-width: 640px)");
	var mediaquerie1023 = window.matchMedia("(max-width: 1023px)");
	var mediaquerie1365 = window.matchMedia("(max-width: 1365px)");

	if (mediaquerie639.matches){ //als die gelijk is aan de max width van hierboven, daar staat matches voor.
		animatie.from(vergroten, 1, {fontSize: 45});
	}
	else if (mediaquerie1023.matches){
		animatie.from(vergroten, 1, {fontSize: 85});
	}
	else if (mediaquerie1365.matches){
		animatie.from(vergroten, 1, {fontSize: 95});
	}
	else {
		animatie.from(vergroten, 1, {fontSize: 115});
	}
}


//FUNCTIES AANROEPEN WANNEER DE PAGINA WORDT GELADEN
window.onload = function (){
	uren();
	minuten();
	seconden();
	checkTijd();
	document.getElementById("datum").innerHTML = formatDate;
	veranderAchtergrond();	
	animatieMinuten();
}


