 var answer = [], preguntaAct=1, cant=0;
 $(document).ready(function(){
	if (sessionStorage.getItem("daticos") != null) {		
		//alert(sessionStorage.length+sessionStorage.getItem("daticos"))
		document.getElementsByTagName('a')[0].innerHTML = sessionStorage.getItem("daticos");
		document.getElementById('titulo').innerHTML = "QUESTIONARIO";
		document.getElementById('bp').style.display = 'block';
		document.getElementById('pregRea').style.display = 'block';
		document.getElementById('cuantas').innerHTML = cant;
		document.getElementById('loguin_form').style.display = 'none';
		document.getElementById('question_form').style.display = 'block';
		document.getElementById('identificador').style.display = 'block';
		document.getElementById('anterior').disabled=true;
		
	} else {
		document.getElementsByTagName('a')[0].innerHTML = "Inicio";
	}
 });
 
function myFunction() {	
	var nom, ape, d;
	nom = document.forms["loguin_form"]['nombre_input'].value;
	ape = document.forms["loguin_form"]['apellido_input'].value;
	window.sessionStorage.setItem("daticos", "Usuario: " +nom+" "+ape);
	return false;    
}

function avanzar(){
	switch (preguntaAct){
		case 1:			
			var p1 = document.getElementsByName("p1");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[0]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}document.getElementById('bp').value = 10;
						break;
				}						
			}
			if(answer[0] != null){
				if(answer[0] == "d"){
					document.getElementById('q1').style.background = "green";					
				}else{
					document.getElementById('q1').style.background = "red";		
				}
				document.getElementById('marcado1').style.display = 'block';				
			}
			document.getElementById('cuantas').innerHTML = cant;
			document.getElementById('pregunta1').style.display = 'none';
			document.getElementById('pregunta2').style.display = 'block';
			document.getElementById('anterior').disabled=false;	
			preguntaAct = 2;
			break;
			
		case 2:
			document.getElementById('pregunta2').style.display = 'none';
			document.getElementById('pregunta3').style.display = 'block';		
			var p1 = document.getElementsByName("p2");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true){					
					break;
				}else if(p1[i].checked){
						answer[1]=p1[i].value; cant++;
						for(var j=0;j<p1.length;j++){
							p1[j].disabled=true;
						}
						document.getElementById('bp').value += 10;
						break;			
				}
			}
			if(answer[1] != null){
				if(answer[1] == "a"){
					document.getElementById('q2').style.background = "green";					
				}else {
					document.getElementById('q2').style.background = "red";		
				}
				document.getElementById('marcado2').style.display = 'block';
			}
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 3;
			break;
		case 3:
			document.getElementById('pregunta3').style.display = 'none';
			document.getElementById('pregunta4').style.display = 'block';		
			var p1 = document.getElementsByName("p3");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[2]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}
					document.getElementById('bp').value += 10;
						break;	
				}
			}
			if(answer[2] != null){
				if(answer[2] == "c"){
					document.getElementById('q3').style.background = "green";
					
				}else{ 
					document.getElementById('q3').style.background = "red";	
				}
					document.getElementById('marcado3').style.display = 'block';
					
			}
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 4;
			break;
		case 4:
			document.getElementById('pregunta4').style.display = 'none';
			document.getElementById('pregunta5').style.display = 'block';
			var p1 = document.getElementsByName("p4");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true){					
					break;
				}else if(p1[i].checked){
						answer[3]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}
					document.getElementById('bp').value += 10;
						break;			
				}
			}
			if(answer[3] != null){
				if(answer[3] == "c"){
					document.getElementById('q4').style.background = "green";
					
				}else {
					document.getElementById('q4').style.background = "red";
				}
				document.getElementById('marcado4').style.display = 'block';				
			}
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 5;
			break;
			
		case 5:
			document.getElementById('pregunta5').style.display = 'none';
			document.getElementById('pregunta6').style.display = 'block';
			var p1 = document.getElementsByName("p5");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)					
					break;
				else if(p1[i].checked){
					answer[4]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}
					document.getElementById('bp').value += 10;
					break;
				}						
			}
			if(answer[4] != null){
				if(answer[4] == "c"){
					document.getElementById('q5').style.background = "green";					
				}else {
					document.getElementById('q5').style.background = "red";		
				}
				document.getElementById('marcado5').style.display = 'block';
				
			}
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 6;
			break;
			
		case 6:
			document.getElementById('pregunta6').style.display = 'none';
			document.getElementById('pregunta7').style.display = 'block';
			var p1 = document.getElementsByName("p6");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true){					
					break;
				}else if(p1[i].checked){
						answer[5]=p1[i].value; cant++;
						for(var j=0;j<p1.length;j++){
							p1[j].disabled=true;
						}
						document.getElementById('bp').value += 10;
						break;			
				}
			}
			if(answer[5] != null){
				if(answer[5] == "a"){
					document.getElementById('q6').style.background = "green";					
				}else {
					document.getElementById('q6').style.background = "red";
				}
				document.getElementById('marcado6').style.display = 'block';				
			}
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 7;
			break;
		case 7:
			document.getElementById('pregunta7').style.display = 'none';
			document.getElementById('pregunta8').style.display = 'block';
			var p1 = document.getElementsByName("p7");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[6]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}document.getElementById('bp').value += 10;
					break;
				}					
			}
			if(answer[6] != null){
				if(answer[6] == "a"){
					document.getElementById('q7').style.background = "green";
					document.getElementById('marcado7').style.display = 'block';
				}else 
					document.getElementById('q7').style.background = "red";		
			}
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 8;
			break;
		case 8:
			document.getElementById('pregunta8').style.display = 'none';
			document.getElementById('pregunta9').style.display = 'block';
			var p1 = document.getElementsByName("p8");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[7]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}document.getElementById('bp').value += 10;
						break;
				}						
			}
			if(answer[7] != null){
				if(answer[7] == "c"){
					document.getElementById('q8').style.background = "green";
					document.getElementById('marcado8').style.display = 'block';
				}else 
					document.getElementById('q8').style.background = "red";		
			}
			document.getElementById('siguiente').disabled=true;
			document.getElementById('cuantas').innerHTML = cant;
			document.getElementById('finalizar').style.display = 'block';
			preguntaAct = 9;
			break;
		
	}
	return false;	
}

function retroceder(){
	switch (preguntaAct){		
		case 2:			
			var p1 = document.getElementsByName("p2");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[1]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}document.getElementById('bp').value += 10;
						break;
				}
			}
			if(answer[1] != null){
				if(answer[1] == "a"){
					document.getElementById('q2').style.background = "green";
				}else {
					document.getElementById('q2').style.background = "red";
				}
				document.getElementById('marcado2').style.display = 'block';
			}
			document.getElementById('pregunta2').style.display = 'none';
			document.getElementById('pregunta1').style.display = 'block';
			document.getElementById('anterior').disabled=true;
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 1;
			break;
		case 3:				
			var p1 = document.getElementsByName("p3");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[2]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}document.getElementById('bp').value += 10;
						break;
				}
			}
			if(answer[2] != null){
				if(answer[2] == "c"){
					document.getElementById('q3').style.background = "green";
				}else {
					document.getElementById('q3').style.background = "red";
				}
				document.getElementById('marcado3').style.display = 'block';
			}
			document.getElementById('pregunta3').style.display = 'none';
			document.getElementById('pregunta2').style.display = 'block';	
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 2;
			break;
		case 4:			
			var p1 = document.getElementsByName("p4");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[3]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}document.getElementById('bp').value += 10;
						break;
				}
			}
			if(answer[3] != null){
				if(answer[3] == "c"){
					document.getElementById('q4').style.background = "green";
				}else {
					document.getElementById('q4').style.background = "red";
				}
				document.getElementById('marcado4').style.display = 'block';
			}
			document.getElementById('pregunta4').style.display = 'none';
			document.getElementById('pregunta3').style.display = 'block';
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 3;
			break;
		case 5:			
			var p1 = document.getElementsByName("p5");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[4]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}document.getElementById('bp').value += 10;
						break;
				}
			}
			if(answer[4] != null){
				if(answer[4] == "c"){
					document.getElementById('q5').style.background = "green";					
				}else{
					document.getElementById('q5').style.background = "red";
				}
				document.getElementById('marcado5').style.display = 'block';
			}
			document.getElementById('pregunta5').style.display = 'none';
			document.getElementById('pregunta4').style.display = 'block';
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 4;
			break;
		case 6:			
			var p1 = document.getElementsByName("p6");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true){					
					break;
				}else if(p1[i].checked){
						answer[5]=p1[i].value; cant++;
						for(var j=0;j<p1.length;j++){
							p1[j].disabled=true;
						}document.getElementById('bp').value += 10;
						break;
					}
			}
			if(answer[5] != null){
				if(answer[5] == "a"){
					document.getElementById('q6').style.background = "green";
				}else {
					document.getElementById('q6').style.background = "red";
				}
				document.getElementById('marcado6').style.display = 'block';
			}
			document.getElementById('pregunta6').style.display = 'none';
			document.getElementById('pregunta5').style.display = 'block';
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 5;
			break;
		case 7:			
			var p1 = document.getElementsByName("p7");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true){					
					break;
				}else if(p1[i].checked){
						answer[6]=p1[i].value; cant++;
						for(var j=0;j<p1.length;j++){
							p1[j].disabled=true;
						}document.getElementById('bp').value += 10;
						break;
					}
			}
			if(answer[6] != null){
				if(answer[6] == "a"){
					document.getElementById('q7').style.background = "green";
				}else{
					document.getElementById('q7').style.background = "red";
				}
				document.getElementById('marcado7').style.display = 'block';
			}
			document.getElementById('pregunta7').style.display = 'none';
			document.getElementById('pregunta6').style.display = 'block';
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 6;
			break;
		case 8:
			document.getElementById('pregunta8').style.display = 'none';
			document.getElementById('pregunta7').style.display = 'block';
			var p1 = document.getElementsByName("p8");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true)
					break;
				else if(p1[i].checked){
					answer[7]=p1[i].value; cant++;
					for(var j=0;j<p1.length;j++){
						p1[j].disabled=true;
					}document.getElementById('bp').value += 10;
						break;
				}
			}
			if(answer[7] != null){
				if(answer[7] == "c"){
					document.getElementById('q8').style.background = "green";					
				}else{ 
					document.getElementById('q8').style.background = "red";
				}
				document.getElementById('marcado8').style.display = 'block';
			}
			document.getElementById('cuantas').innerHTML = cant;
			preguntaAct = 7;
			break;
		case 9:
			document.getElementById('pregunta9').style.display = 'none';
			document.getElementById('finalizar').style.display = 'none';
			var p1 = document.getElementsByName("p9");				
			for(var i=0;i<p1.length;i++){
				if(p1[i].disabled == true){					
					break;
				}else if(p1[i].checked){
						answer[8]=p1[i].value; cant++;
						for(var j=0;j<p1.length;j++){
							p1[j].disabled=true;
						}document.getElementById('bp').value += 10;
						break;
					}
			}
			if(answer[8] != null){
				if(answer[8] == "a"){
					document.getElementById('q9').style.background = "green";
					document.getElementById('marcado9').style.display = 'block';
				}else 
					document.getElementById('q9').style.background = "red";
					document.getElementById('marcado9').style.display = 'block';
			}
			document.getElementById('cuantas').innerHTML = cant;
			document.getElementById('pregunta8').style.display = 'block';
			document.getElementById('siguiente').disabled=false;
			preguntaAct = 8;
			break;
	}
	return false;
}

function evaluar(){
	var r = 0;
	if(answer.length != 0){
		if(answer[0] != undefined){
			if(answer[0] == 'd')
				r++;
		}
		if(answer[1] != undefined){
			if(answer[1] == 'a')
				r++;
		}
		if(answer[2] != undefined){
			if(answer[2] == 'c')
				r++;
		}
		if(answer[3] != undefined){
			if(answer[3] == 'c')
				r++;
		}
		if(answer[4] != undefined){
			if(answer[4] == 'c')
				r++;
		}
		if(answer[5] != undefined){
			if(answer[5] == 'a')
				r++;
		}
		if(answer[6] != undefined){
			if(answer[6] == 'a')
				r++;
		}
		if(answer[7] != undefined){
			if(answer[7] == 'c')
				r++;
		}
		if(answer[8] != undefined){
			if(answer[8] == 'a')
				r++;
		}
	}
	return r;	
}
function fin(){
	var p1 = document.getElementsByName("p9");				
	for(var i=0;i<p1.length;i++){
		if(p1[i].disabled == true){					
			break;
		}else if(p1[i].checked){
				answer[8]=p1[i].value; cant++;
				for(var j=0;j<p1.length;j++){
					p1[j].disabled=true;
				}document.getElementById('bp').value += 10;
				document.getElementById('cuantas').innerHTML = cant;
				break;
			}
	}
	if(answer[8] != null){
		if(answer[8] == "a"){
			document.getElementById('q9').style.background = "green";
			document.getElementById('marcado9').style.display = 'block';
		}else{ 
			document.getElementById('q9').style.background = "red";
			document.getElementById('marcado9').style.display = 'block';
		}		
	}
	// Deshabilitando las respuestas
	for(var i=0; i<4; i++){		
		var p1 = document.getElementsByName("p"+(i+1));		
		if(p1[i].disabled == true)
			continue;
		else{
			for(var j=0;j<p1.length;j++){
				p1[j].disabled=true;
			}
		}			
	}
	// Mostrando todas las preguntas		
	var cues = document.getElementsByName("preg");
	var resp = document.getElementsByName("resp");
	for(var i=0; i<cues.length; i++){
		cues[i].style.display = 'block';
		resp[i].style.display = 'block';
	}
	// Questionario Ganado/Perdido
	var gp = evaluar();
	if(gp < 5){
		document.getElementById('rrr').innerHTML = "Questionario Perdido";
	}else{
		document.getElementById('rrr').innerHTML = "Questionario Ganado";
	}	
	document.getElementById('titulo').innerHTML = "RESULTADOS";
	document.getElementById('rrr').style.display='block';
	document.getElementById('anterior').style.display='none';
	document.getElementById('siguiente').style.display='none';
	document.getElementById('finalizar').style.display='none';
	document.getElementById('reiniciar').style.display='block';
	return false;	
}

function ender(){
	sessionStorage.clear();
	location.reload(true);	
}