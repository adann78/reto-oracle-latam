
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var msj=document.getElementById("mensaje")
var msj2=document.getElementById("mensaje2")
function copiar(){
  msj.value=msj2.value;
}
function desEncriptar(){
  let arr=msj.value.split(',')
  for(let i=0;i<arr.length;i++){  
    const indice = arr.indexOf('ai');
    const indice2 = arr.indexOf('enter');
    const indice3 = arr.indexOf('imes');
    const indice4 = arr.indexOf('ober');
    const indice5 = arr.indexOf('ufat');
     arr[indice] = 'a';
     arr[indice2] = 'e'
     arr[indice3] = 'i'
     arr[indice4] = 'o'
     arr[indice5] = 'u'
  }
  console.log(arr)
  msj2.value=arr
}
function encriptar(){
  let arr=msj.value.split('')
  for(let i=0;i<arr.length;i++){  
    const indice = arr.indexOf('a');
    const indice2 = arr.indexOf('e');
    const indice3 = arr.indexOf('i');
    const indice4 = arr.indexOf('o');
    const indice5 = arr.indexOf('u');
     arr[indice] = 'ai';
     arr[indice2] = 'enter'
     arr[indice3] = 'imes'
     arr[indice4] = 'ober'
     arr[indice5] = 'ufat'
  }
arr2=arr.toString()
arr2.replace(/,/g,"=")
 msj2.value=arr2
 
 console.log(arr)

     }
  
