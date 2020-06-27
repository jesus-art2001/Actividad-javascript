function a1(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    document.getElementById("resultado").innerHTML = colores;
}
function a2(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    colores.pop()
    document.getElementById("resultado1").innerHTML = colores;
}
function a3(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    colores.shift()
    document.getElementById("resultado2").innerHTML = colores;
}
function a4(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    colores.push("negro","naranja")
    document.getElementById("resultado3").innerHTML = colores;
}
function a5(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    colores.unshift("Gris","Dorado")
    document.getElementById("resultado4").innerHTML = colores;
}
function a6(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    colores.splice(2,0,"Gris","Dorado")
    document.getElementById("resultado5").innerHTML = colores;
}
function a7(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    delete colores[2];
    document.getElementById("resultado6").innerHTML = colores;
}
function a8(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    colores.reverse()
    document.getElementById("resultado7").innerHTML = colores;
}
function a9(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    colores.sort()
    document.getElementById("resultado8").innerHTML = colores;
}
function a10(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    var colores2=["violeta","azul claro"]
    var children=colores.concat(colores2);
   
    document.getElementById("resultado9").innerHTML = children;
}
function a11(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    var x=document.getElementById("resultado10");
   
    x.innerHTML = colores.join();
}
function a12(){
    var colores=["rojo","verde","amarillo","azul","blanco"];
    
    document.getElementById("resultado11").innerHTML = colores.length;
}