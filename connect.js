//Página de Connect

	function connect(){
	    $('#btcnt').attr('src','Imgs/ImgsConnect/connectON.png');
		$('#load').attr('src','Imgs/ImgsConnect/load.gif');
		$('#load').removeAttr('hidden');
		$('#msg').removeAttr('hidden');
		window.setTimeout('loading()',4000);
	}
	
	function loading(){	
		if((window.location.search.substr(1).split("?")>4) && ($('#name').val()!='')){
window.location.replace('chat.html?'+$('#name').val()); 
		}
		else {
			$('#load').attr('src','Imgs/ImgsConnect/cantconnect.png');
			$('#msg').text("Connection Failed. Try again later or seek for someone else");
			$('#msg').attr('style','color:#FA5882');
			$('#btcnt').attr('src','Imgs/ImgsConnect/connectOFF.png');
			ghostHunter();
		}
	
	}
	
// Página de Chat

var respuesta1 = new Array();
var respuesta2 = new Array();
var fantasma;
var idr1;
var idr2;
var obj=cjson();
var stage=4;
var esc;
function onload(){
var n = Math.floor((Math.random()*stage)+1);	
var hola;
//Colocamos el nombre del fantasma
		var name = new Array();
		name=window.location.search.substr(1).split("?");
		$('#spirit').text(name[0]);

//Seleccionamos el camino de Hola		
switch(n)
{
case 1:
  hola=1101;
  break;
case 2:
  hola=1201;
case 3:
  hola=1301;
  break;
default:
  hola=1401;
}

//obtenemos la pregunta
for(var i=0;i<100;i++)
{
	if(obj.conversacion.hola.guion[i].id==hola)
	   {
fantasma=obj.conversacion.hola.guion[i].texto;
idr1=obj.conversacion.hola.guion[i].siguiente1;
idr2=obj.conversacion.hola.guion[i].siguiente2;
		break;
	   }
	}
//obtenemos primer respuesta
for(var i=0;i<100;i++)
{
	if(obj.conversacion.hola.guion[i].id==idr1)
	   {
respuesta1[0]=obj.conversacion.hola.guion[i].texto;
respuesta1[1]=obj.conversacion.hola.guion[i].siguiente1;
		break;
	   }
	}
//obtenemos la segunda respuesta
for(var i=0;i<100;i++)
{
	if(obj.conversacion.hola.guion[i].id==idr2)
	   {
respuesta2[0]=obj.conversacion.hola.guion[i].texto;
respuesta2[1]=obj.conversacion.hola.guion[i].siguiente1;
		break;
	   }
	}
//comenzamos a pintar
msg = document.getElementById('msg').getContext('2d');
msg2 = document.getElementById('msg2').getContext('2d');
msg3 = document.getElementById('msg3').getContext('2d');
btn1 = document.getElementById('btn1').getContext('2d');
btn2 = document.getElementById('btn2').getContext('2d');


//pregunta
var chat1 = new Image();
chat1.src = 'Imgs/ImgsConnect/dialog2.png';
chat1.onload = function(){
			msg.drawImage(chat1,0,0);
			msg.font="bold italic 20px Arial";
			msg.fillStyle = "#fff";
			
    var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 36; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < fantasma.length)
    {
    str = fantasma.substr(start,jumpAt);
    start += jumpAt;
    msg.fillText(str, 70, 35+(lineHeight*currentLine++));
    }

}
//respuestas
		var img1 = new Image();
		img1.src = 'Imgs/ImgsConnect/btnchat.png';

		img1.onload = function(){
			btn1.drawImage(img1,0,0);
			btn1.font="bold italic 20px Arial";
			btn1.fillStyle = "#fff";
   
    var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 35; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < respuesta1[0].length)
    {
    str = respuesta1[0].substr(start,jumpAt);
    start += jumpAt;
    btn1.fillText(str, 20, 35+(lineHeight*currentLine++));
    }
			btn2.drawImage(img1,0,0);
			btn2.font="bold italic 20px Arial";
			btn2.fillStyle = "#fff";
			
    var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 35; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < respuesta2[0].length)
    {
    str = respuesta2[0].substr(start,jumpAt);
    start += jumpAt;
    btn2.fillText(str, 20, 35+(lineHeight*currentLine++));
    }
		}

	}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function clickres()
    {
//obtenemos los canvas		
msg = document.getElementById('msg').getContext('2d');
msg2 = document.getElementById('msg2').getContext('2d');
msg3 = document.getElementById('msg3').getContext('2d');
btn1 = document.getElementById('btn1').getContext('2d');
btn2 = document.getElementById('btn2').getContext('2d');	

//limpiamos los canvas	
msg.clearRect(0,0,600,600);
msg2.clearRect(0,0,600,600);
msg3.clearRect(0,0,600,600);
btn1.clearRect(0,0,600,600);
btn2.clearRect(0,0,600,600);

//dibujamos la respuesta del fantasma
var chat3 = new Image();
chat3.src = 'Imgs/ImgsConnect/dialog1.png';
chat3.onload = function(){
			msg2.drawImage(chat3,0,0);
			msg2.font="bold italic 20px Arial";
			msg2.fillStyle = "#fff";
						
    var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 36; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < respuesta1[0].length)
    {
    str = respuesta1[0].substr(start,jumpAt);
    start += jumpAt;
    msg2.fillText(str, 70, 35+(lineHeight*currentLine++));
    }			
}
			//pregunta anterior
var chat1 = new Image();
chat1.src = 'Imgs/ImgsConnect/dialog2.png';
chat1.onload = function(){
			msg.drawImage(chat1,0,0);
			msg.font="bold italic 20px Arial";
			msg.fillStyle = "#fff";
					
    var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 36; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < fantasma.length)
    {
    str = fantasma.substr(start,jumpAt);
    start += jumpAt;
    msg.fillText(str, 70, 35+(lineHeight*currentLine++));
    }			
	}
					
window.setTimeout('clickresf()',3000);
	}
function clickresf(){
//obtenemos la pregunta del fantasma
for(var i=0;i<100;i++)
{
if(obj.conversacion.hola.guion[i].id==respuesta1[1])
	   {
fantasma=obj.conversacion.hola.guion[i].texto;
idr1=obj.conversacion.hola.guion[i].siguiente1;
idr2=obj.conversacion.hola.guion[i].siguiente2;
esc=obj.conversacion.hola.guion[i].fin; 
		break;
	   }
	}
//dibujamos la respuesta del fantasma

var chat4 = new Image();
chat4.src = 'Imgs/ImgsConnect/dialog2.png';
chat4.onload = function(){
			msg3.drawImage(chat4,0,0);
			msg3.font="bold italic 20px Arial";
			msg3.fillStyle = "#fff";
    
	var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 36; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < fantasma.length)
    {
    str = fantasma.substr(start,jumpAt);
    start += jumpAt;
    msg3.fillText(str, 70, 35+(lineHeight*currentLine++));
    }
}	
	
//si termina la conversasion manda al creepy pasta
		    if((esc=="next")||(esc=="si"))
		    {
			window.setTimeout('gocreepy()',3000);
			}

	
//obtenemos primer respuesta
for(var i=0;i<100;i++)
{
	if(obj.conversacion.hola.guion[i].id==idr1)
	   {
respuesta1[0]=obj.conversacion.hola.guion[i].texto;
respuesta1[1]=obj.conversacion.hola.guion[i].siguiente1;
		break;
	   }
	}
//obtenemos la segunda respuesta
for(var i=0;i<100;i++)
{
	if(obj.conversacion.hola.guion[i].id==idr2)
	   {
respuesta2[0]=obj.conversacion.hola.guion[i].texto;
respuesta2[1]=obj.conversacion.hola.guion[i].siguiente1;
		break;
	   }
	}
//respuestas
		var img1 = new Image();
		img1.src = 'Imgs/ImgsConnect/btnchat.png';

		img1.onload = function(){
			btn1.drawImage(img1,0,0);
			btn1.font="bold italic 20px Arial";
			btn1.fillStyle = "#fff";
var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 35; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < respuesta1[0].length)
    {
    str = respuesta1[0].substr(start,jumpAt);
    start += jumpAt;
    btn1.fillText(str, 20, 35+(lineHeight*currentLine++));
    }
			btn2.drawImage(img1,0,0);
			btn2.font="bold italic 20px Arial";
			btn2.fillStyle = "#fff";
			
    var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 35; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < respuesta2[0].length)
    {
    str = respuesta2[0].substr(start,jumpAt);
    start += jumpAt;
    btn2.fillText(str, 20, 35+(lineHeight*currentLine++));
    }
		}


	}
	
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function clickres2()
    {
//obtenemos los canvas		
msg = document.getElementById('msg').getContext('2d');
msg2 = document.getElementById('msg2').getContext('2d');
msg3 = document.getElementById('msg3').getContext('2d');
btn1 = document.getElementById('btn1').getContext('2d');
btn2 = document.getElementById('btn2').getContext('2d');

//limpiamos los canvas
    msg.clearRect(0,0,600,600);
	msg2.clearRect(0,0,600,600);
    msg3.clearRect(0,0,600,600);
	btn1.clearRect(0,0,600,600);
    btn2.clearRect(0,0,600,600);	
//dibujamos la respuesta del fantasma
var chat3 = new Image();
chat3.src = 'Imgs/ImgsConnect/dialog1.png';
chat3.onload = function(){
			msg2.drawImage(chat3,0,0);
			msg2.font="bold italic 20px Arial";
			msg2.fillStyle = "#fff";
	
	var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 36; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < respuesta2[0].length)
    {
    str = respuesta2[0].substr(start,jumpAt);
    start += jumpAt;
    msg2.fillText(str, 70, 35+(lineHeight*currentLine++));
    }			
			
			//pregunta anterior
var chat1 = new Image();
chat1.src = 'Imgs/ImgsConnect/dialog2.png';
chat1.onload = function(){
			msg.drawImage(chat1,0,0);
			msg.font="bold italic 20px Arial";
			msg.fillStyle = "#fff";
			
	var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 36; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < fantasma.length)
    {
    str = fantasma.substr(start,jumpAt);
    start += jumpAt;
    msg.fillText(str, 70, 35+(lineHeight*currentLine++));
    }			
}
}		
window.setTimeout('clickresf2()',3000);
	}
	
function clickresf2(){		
//obtenemos la pregunta del fantasma
for(var i=0;i<100;i++)
{
if(obj.conversacion.hola.guion[i].id==respuesta2[1])
	   {
fantasma=obj.conversacion.hola.guion[i].texto;
idr1=obj.conversacion.hola.guion[i].siguiente1;
idr2=obj.conversacion.hola.guion[i].siguiente2;
esc=obj.conversacion.hola.guion[i].fin; 
		break;
	   }
	}
//dibujamos la respuesta del fantasma
var chat4 = new Image();
chat4.src = 'Imgs/ImgsConnect/dialog2.png';
chat4.onload = function(){
			msg3.drawImage(chat4,0,0);
			msg3.font="bold italic 20px Arial";
			msg3.fillStyle = "#fff";
	
	var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 36; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < fantasma.length)
    {
    str = fantasma.substr(start,jumpAt);
    start += jumpAt;
    msg3.fillText(str, 70, 35+(lineHeight*currentLine++));
    }
}	

//si termina la conversasion manda al creepy pasta
		if((esc=="next")||(esc=="si"))
		    {
			window.setTimeout('gocreepy()',3000);
			}
			
//obtenemos primer respuesta
for(var i=0;i<100;i++)
{
	if(obj.conversacion.hola.guion[i].id==idr1)
	   {
respuesta1[0]=obj.conversacion.hola.guion[i].texto;
respuesta1[1]=obj.conversacion.hola.guion[i].siguiente1;
		break;
	   }
	}
//obtenemos la segunda respuesta
for(var i=0;i<100;i++)
{
	if(obj.conversacion.hola.guion[i].id==idr2)
	   {
respuesta2[0]=obj.conversacion.hola.guion[i].texto;
respuesta2[1]=obj.conversacion.hola.guion[i].siguiente1;
		break;
	   }
	}
	
//respuestas
		var img1 = new Image();
		img1.src = 'Imgs/ImgsConnect/btnchat.png';

		img1.onload = function(){
			btn1.drawImage(img1,0,0);
			btn1.font="bold italic 20px Arial";
			btn1.fillStyle = "#fff";
var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 35; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < respuesta1[0].length)
    {
    str = respuesta1[0].substr(start,jumpAt);
    start += jumpAt;
    btn1.fillText(str, 20, 35+(lineHeight*currentLine++));
    }
			btn2.drawImage(img1,0,0);
			btn2.font="bold italic 20px Arial";
			btn2.fillStyle = "#fff";
			
    var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea que nos encontramos.
    var jumpAt = 35; // Número de caracteres por línea.
    var lineHeight = 20; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < respuesta2[0].length)
    {
    str = respuesta2[0].substr(start,jumpAt);
    start += jumpAt;
    btn2.fillText(str, 20, 35+(lineHeight*currentLine++));
    }
		}
		

	}	
	function gocreepy(){       
		window.location.replace('Creepy.html'); 
	}
	function onback(){       
		window.location.replace('menu.html'); 
	}