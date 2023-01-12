function encriptar(){
    const letras = /[^a-z,. ; : ! (), \s]/gm;
    var texto = document.getElementById("ingreso").value;
    if(texto === ""){
      alert("Debe ingresar un texto en minúscula");
    }
    if(texto.match(letras) != null){
       alert("Solo letras minúsculas, sin acentos ni caracteres especiales");
    }else{
    var textoCifrado = texto.replace(/e/gm, "enter").replace(/i/gm, "imes").replace(/a/gm, "ai").replace(/o/gm, "ober").replace(/u/gm, "ufat");
    document.getElementById("salida").innerHTML = textoCifrado;
      if(textoCifrado != ""){
     document.getElementById("tres").style.visibility = "visible";
     document.getElementById("des").disabled = false;
     document.getElementById("des").style.color = "blue";
      }
      document.getElementById("ingreso").value = "";
    }
  }
  
  function desencriptar() {
  var texto = document.getElementById("ingreso").value;
  if(texto === ""){
    alert("Debe copiar el texto para desencriptar");
  }else{
   var textoNoCifrado = texto.replace(/enter/gm, "e").replace(/imes/gm, "i").replace(/ai/gm, "a").replace(/ober/gm, "o").replace(/ufat/gm, "u");
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