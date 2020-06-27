
function norte(){
      var x = document.getElementById("norte");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
     
}
function centro(){
      var x = document.getElementById("centro");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
}
function sur(){
      var x = document.getElementById("sur");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
}
function zona1(){
      var r = document.getElementsByName("opcion");
	
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked) {
		  var e = r[i].value;
		}
	  }
switch(e){
	case 'a':
      var zona="Zona norte";
      var votante="Candidato 1";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;
	break;
	case 'b':
		var zona="Zona norte";
      var votante="Candidato 2";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;
      break;
      case 'c':
            var zona="Zona norte";
      var votante="Candidato 3";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;

      break;
	default:
	document.write("Este rango no esta permitido");	
	}

	document.getElementById("resultado").innerHTML=res;
}
function zona2(){
      var r = document.getElementsByName("opcion");
	
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked) {
		  var e = r[i].value;
		}
	  }
switch(e){
	case 'a':
      var zona="Zona centro";
      var votante="Candidato 1";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;
	break;
	case 'b':
		var zona="Zona centro";
      var votante="Candidato 2";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;
      break;
      case 'c':
            var zona="Zona centro";
      var votante="Candidato 3";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;

      break;
	default:
	document.write("Este rango no esta permitido");	
	}

	document.getElementById("resultado").innerHTML=res;
}
function zona3(){
      var r = document.getElementsByName("opcion");
	
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked) {
		  var e = r[i].value;
		}
	  }
switch(e){
	case 'a':
      var zona="Zona sur";
      var votante="Candidato 1";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;
	break;
	case 'b':
		var zona="Zona sur";
      var votante="Candidato 2";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;
      break;
      case 'c':
            var zona="Zona sur";
      var votante="Candidato 3";
      document.getElementById("zonar").innerHTML=zona;
      document.getElementById("votante").innerHTML=votante;

      break;
	default:
	document.write("Este rango no esta permitido");	
	}

	document.getElementById("resultado").innerHTML=res;
}


        
	

       
            
