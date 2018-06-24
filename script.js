function velha(computadr, usados){
	var clicados = document.getElementsByClassName('data');
	if(clicados.length <=  0){
		return false;
	}
	else{
		return true;
	}
}
function limpar(){
	computador.splice(0, computador.length);
	usados.splice(0, usados.length);
	document.getElementById("dt1").innerHTML = "";
	document.getElementById("dt2").innerHTML = "";
	document.getElementById("dt3").innerHTML = "";
	document.getElementById("dt4").innerHTML = "";
	document.getElementById("dt5").innerHTML = "";
	document.getElementById("dt6").innerHTML = "";
	document.getElementById("dt7").innerHTML = "";
	document.getElementById("dt8").innerHTML = "";
	document.getElementById("dt9").innerHTML = "";
	document.getElementById("dt1").className = "data";
	document.getElementById("dt2").className = "data";
	document.getElementById("dt3").className = "data";
	document.getElementById("dt4").className = "data";
	document.getElementById("dt5").className = "data";
	document.getElementById("dt6").className = "data";
	document.getElementById("dt7").className = "data";
	document.getElementById("dt8").className = "data";
	document.getElementById("dt9").className = "data";
	
}
function perdeu(derrota){
	derrota = derrota + 1;
	document.getElementById('numder').innerHTML = derrota;
	limpar();
}
function ganhou(vitoria){
	vitoria = vitoria + 1;
	document.getElementById('numvit').innerHTML = vitoria;
	limpar();
}
function verificar(temp, verificador){
	var vit = document.getElementById('numvit');
	var vitoria = parseInt(vit.innerHTML);
	var der = document.getElementById('numder');
	var derrota = parseInt(der.innerHTML);

	if(temp.includes("dt1") && temp.includes("dt2") && temp.includes("dt3")){
		if(verificador == 1){
			ganhou(vitoria);
		}
		else{
			perdeu(derrota);
		}
		return true;
	}
	else if(temp.includes("dt4") && temp.includes("dt5") && temp.includes("dt6")){
		if(verificador == 1){
			ganhou(vitoria);
		}
		else{
			perdeu(derrota);
		}
		return true;
	}
	else if(temp.includes("dt7") && temp.includes("dt8") && temp.includes("dt9")){
		if(verificador == 1){
			ganhou(vitoria);
		}
		else{
			perdeu(derrota);
		}
		return true;
	}
	else if(temp.includes("dt1") && temp.includes("dt4") && temp.includes("dt7")){
		if(verificador == 1){
			ganhou(vitoria);
		}
		else{
			perdeu(derrota);
		}
		return true;
	}
	else if(temp.includes("dt2") && temp.includes("dt5") && temp.includes("dt8")){
		if(verificador == 1){
			ganhou(vitoria);
		}
		else{
			perdeu(derrota);
		}
		return true;
	}
	else if(temp.includes("dt3") && temp.includes("dt6") && temp.includes("dt9")){
		if(verificador == 1){
			ganhou(vitoria);
		}
		else{
			perdeu(derrota);
		}
		return true;
	}
	else if(temp.includes("dt1") && temp.includes("dt5") && temp.includes("dt9")){
		if(verificador == 1){
			ganhou(vitoria);
		}
		else{
			perdeu(derrota);
		}
		return true;
	}
	else if(temp.includes("dt3") && temp.includes("dt5") && temp.includes("dt7")){
		if(verificador == 1){
			ganhou(vitoria);
		}
		else{
			perdeu(derrota);
		}
		return true;
	}
	return false;
}
function clicar(){
	this.innerHTML = "<i style='font-size:50px' class='fas fa-asterisk'></i>";
	if(!usados.includes(this.id)){
		usados[count] = this.id;
		
		this.className = "dataClicada";
		count++;
	}
	if(!verificar(usados, 1)){
		while(1){
			random = Math.random() * 10;
			random = random.toFixed(0);
			if(velha(computador, usados)){
				if(!usados.includes("dt"+random)){
				var campo = document.getElementById("dt"+random);
					if(campo != null && !computador.includes(campo.id)){
					computador[countComp] = campo.id;
						if(verificar(computador, 2)){
							break;
						}
						countComp ++;
						campo.className = "dataClicada";
						campo.innerHTML = "<i style='font-size:50px' class='fas fa-circle'></i>";
						break;
					}
				}
			}
			else{
				// empate
				limpar();
				break;
			}
		}
	}
}
var countComp = 0;
var random = 0;
var count = 0;
var usados = new Array();
var computador = new Array();
window.onload = function(){
var list = document.getElementsByClassName('data');
	for(i = 0; i<list.length; i++){
		list[i].onclick = clicar;
	}
}