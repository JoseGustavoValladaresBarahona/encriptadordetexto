function encriptar(){
    const letras = /[^a-z,. ; : ! (),0-9\s]/gm;
    var texto = document.getElementById("ingreso").value;
    if(texto === ""){
      alert("Debe ingresar un texto en minúscula");
    }
    if(texto.match(letras) != null){
       alert("Solo letras minúsculas, sin acentos ni caracteres especiales");
    }else{
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("salida").innerHTML = textoCifrado;
      if(textoCifrado != ""){
     document.getElementById("tres").style.visibility = "visible";
      }
      document.getElementById("ingreso").value = "";
    }
  }
  
  function desencriptar() {
  var texto = document.getElementById("ingreso").value;
  if(texto === ""){
    alert("Debe copiar el texto para desencriptar");
  }else{
   var textoNoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
   document.getElementById("salida").innerHTML = textoNoCifrado;
  }
  }
    
  function copiar() {
  var texto = document.getElementById("ingreso").value = " ";
  var copyText = document.getElementById("salida");
  if(copyText === ""){
      alert("No hay un texto que copiar");
  }else{
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  }
}