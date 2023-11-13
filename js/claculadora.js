let resultado = document.getElementById("resultado");
let reset = document.getElementById("reset");
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let suma = document.getElementById("sumar");
let resta = document.getElementById("restar");
let multi = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");
let operacion=0;
let bandera = true;
let bandera2 = false;
let total=0;

punto.onclick = function(e){
    if (resultado.textContent.indexOf(".")<1) {
      if(bandera){
      if (resultado.textContent.length<25) {
        if (resultado.textContent=="0") {
            resultado.textContent="0.";
        }else{
            resultado.textContent=resultado.textContent+".";
        }
    }  
    console.log(resultado.textContent.indexOf("."));
    }else{
        resultado.textContent=".";
        bandera=true;
    }  
    }
    
    
}
cero.onclick = function(e){
    if (bandera) {
       if (resultado.textContent.length<25) {
            if (resultado.textContent!="0") {
                resultado.textContent=resultado.textContent+"0"; 
            }
        }   
    }else{
        resultado.textContent="0";
        bandera=true;
    }
  
}

uno.onclick = function(e){
    if (bandera) {
       if (resultado.textContent.length<25) {
        if (resultado.textContent=="0") {
            resultado.textContent="1";
        }else{
            resultado.textContent=resultado.textContent+"1";
        }
    } 
    }else{
        resultado.textContent="1"; 
        bandera=true;
    }
    
}

dos.onclick = function(e){
    if(bandera){
      if (resultado.textContent.length<25) {
        if (resultado.textContent=="0") {
            resultado.textContent="2";
        }else{
            resultado.textContent=resultado.textContent+"2";
        }
    }  
    }else{
        resultado.textContent="2";
        bandera=true;
    }
    
}

tres.onclick = function(e){
    if(bandera){
      if (resultado.textContent.length<25) {
        if (resultado.textContent=="0") {
            resultado.textContent="3";
        }else{
            resultado.textContent=resultado.textContent+"3";
        }
    }  
    }else{
        resultado.textContent="3";
        bandera=true;
    }
}

cuatro.onclick = function(e){
    if(bandera){
        if (resultado.textContent.length<25) {
          if (resultado.textContent=="0") {
              resultado.textContent="4";
          }else{
              resultado.textContent=resultado.textContent+"4";
          }
      }  
      }else{
          
      }
}

cinco.onclick = function(e){
    if(bandera){
        if (resultado.textContent.length<25) {
          if (resultado.textContent=="0") {
              resultado.textContent="5";
          }else{
              resultado.textContent=resultado.textContent+"5";
          }
      }  
      }else{
          
      }
}

seis.onclick = function(e){
    if(bandera){
        if (resultado.textContent.length<25) {
          if (resultado.textContent=="0") {
              resultado.textContent="6";
          }else{
              resultado.textContent=resultado.textContent+"6";
          }
      }  
      }else{
          
      }
}

siete.onclick = function(e){
    if(bandera){
        if (resultado.textContent.length<25) {
          if (resultado.textContent=="0") {
              resultado.textContent="7";
          }else{
              resultado.textContent=resultado.textContent+"7";
          }
      }  
      }else{
          
      }
}

ocho.onclick = function(e){
    if(bandera){
        if (resultado.textContent.length<25) {
          if (resultado.textContent=="0") {
              resultado.textContent="8";
          }else{
              resultado.textContent=resultado.textContent+"8";
          }
      }  
      }else{
          
      }
}

nueve.onclick = function(e){
    if(bandera){
        if (resultado.textContent.length<25) {
          if (resultado.textContent=="0") {
              resultado.textContent="9";
          }else{
              resultado.textContent=resultado.textContent+"9";
          }
      }  
      }else{
          
      }
}

reset.addEventListener('click',resets);
function resets() {
    resultado.textContent="0";
    operacion=0;
    bandera = true;
    bandera2 = false;
    total=0;

    
}

suma.onclick = function(e){
    if (bandera2) {
        let total2 = parseFloat(operacion)+parseFloat(resultado.textContent);
        resultado.textContent=total2;
    }
    operacion = parseFloat(resultado.textContent);
    bandera=false;
    bandera2=true;
}

resta.onclick = function(e){
    if (bandera2) {
        let total2 = parseFloat(operacion) - parseFloat(resultado.textContent);
        resultado.textContent = total2;
    }
    operacion = parseFloat(resultado.textContent);
    bandera = false;
    bandera2 = true;
}

dividir.onclick = function (e) {
    if (bandera2) {
        let divisor = parseFloat(resultado.textContent);
        if (divisor === 0) {
            resultado.textContent = "Error: División por cero";
        } else {
            let total2 = parseFloat(operacion) / divisor;
            resultado.textContent = total2;
        }
    }
    operacion = parseFloat(resultado.textContent);
    bandera = false;
    bandera2 = true;
}

multi.onclick = function(e){
    if (bandera2) {
        let total2 = parseFloat(operacion) * parseFloat(resultado.textContent);
        resultado.textContent = total2;
    }
    operacion = parseFloat(resultado.textContent);
    bandera = false;
    bandera2 = true;
}

igual.onclick = function(e){
    total = parseFloat(operacion)-parseFloat(resultado.textContent);
    resultado.textContent=total;
    bandera=false;
    bandera2=true;

}