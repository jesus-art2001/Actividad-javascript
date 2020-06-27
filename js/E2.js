function si(){
    var x = parseInt(document.getElementById("n2").value);
    var z = parseInt(document.getElementById("n3").value);
    var y = parseInt(document.getElementById("n4").value);
    var w = parseInt(document.getElementById("n5").value);
    var a= x+z+y+w;
    if(x<=0){
        a="Un numero es invalido";
    }
    if(z<=0){
        a="Un numero es invalido";
    }
    if(y<=0){
        a="Un numero es invalido";
    }
    if(w<=0){
        a="Un numero es invalido";
    }
    document.getElementById("resultado").innerHTML=a;
}
function si2(){
    var x = parseInt(document.getElementById("n2").value);
    var z = parseInt(document.getElementById("n3").value);
    var y = parseInt(document.getElementById("n4").value);
    if(x>z){
        if(x>y){
            if(z>y){
              var a="el mayor es: "+x+" el mediano es: "+z+" el menor es: "+y;
            }
            else{
                var a="el mayor es: "+x+" el mediano es: "+y+" el menor es: "+z; 
            }
        }
        else{
            var a="el mayor es: "+y+" el mediano es: "+x+" el menor es: "+z;
        }
    }
    else{
        if(z>y){
            if(x>y){
                var a="el mayor es: "+z+" el mediano es: "+x+" el menor es: "+y;
            }
            else{
                var a="el mayor es: "+z+" el mediano es: "+y+" el menor es: "+x;
            }
        }
        else{
            var a="el mayor es: "+y+" el mediano es: "+z+" el menor es: "+x;
        }
    }
    document.getElementById("resultado").innerHTML=a;
}
function neto(){
    var x = parseFloat(document.getElementById("n6").value);
    if(x>15000){
       var impuesto=x*0.16;
       var t=x+impuesto;
    }
    else{
        var impuesto=x*0.10;
        var t=x+impuesto;
    }
    document.getElementById("resultado1").innerHTML=t;
}
function sueldo(){
    var anual=40000;
    var x=parseFloat(anual);
    var z = parseFloat(document.getElementById("n7").value);
    if(z>=10){
        var aumento=x*0.10;
        var t=x+aumento;
    }
    if(z<10 && z>=5){
        var aumento=x*0.07;
        var t=x+aumento;
    }
    if(z<5 && z>=3){
        var aumento=x*0.05;
        var t=x+aumento;
    }
    if(z<3){
        var aumento=x*0.03;
        var t=x+aumento;
    }
    document.getElementById("resultado2").innerHTML=t;
}
function impar(){
    var i;
    var suma=0;
    for(i=1;i<=100;i++){
       if(i%2!=0){
           suma=suma+i;
       }
    }
    sumaimpar="la suma de los numeros impares es: "+suma;
    document.getElementById("resultado").innerHTML=sumaimpar;
}
function ast(){
    var z = parseInt(document.getElementById("n8").value);
    suma="";
    for(i=1;i<=z;i++){
        var num="*";
        var a=num;
        var suma=suma+num;
    }
    
    document.getElementById("resultado4").innerHTML=suma;
}
function generateTable(){
    var input = 10;
    
    if(input == ""){
      alert("Enter some number first");
    }else{
      var digit = 0;
      if(input <= 0){
        digit = 1;
        document.getElementById('input').value = 1;
      }else{
        digit = input;
      }
      
    
      
      var html = "";
      for(var i = 1; i <= digit; i++) {
      html += "<tr>";
        for(var j = 1; j <= 10; j++){
          
          html += "<td>"+i*j+"</td>";
        }
        html += "</tr>";
      }
    
      document.getElementById('result').innerHTML = html;
      document.getElementById('result').setAttribute('class', 'alert-warning');
    }
  }

  function mostrar(){
    var x = document.getElementById("formulario1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
   
}