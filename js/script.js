console.log("pagina js collegata");
//task 1 creare un array di 100 elementi 
const squareBox=document.getElementById("grid");
const arraySquare=createArray(100);
for(let i=0;i<arraySquare.length;i++){
const nodeHtml=newHtmlElement(arraySquare[i]);
nodeHtml.addEventListener("click",handleDivClick);
squareBox.append(nodeHtml);
}





/**
 * funzione che  aggiunger una classe a un elemento html su cui si verifichera un evento e va a stampare a console il contenuto testuale del nodo html
 * 
 */
function handleDivClick(){
this.classList.add("azzurro");
console.log(this.textContent);  

}  


/**
 * funzione che crea un elemento html,un div dove il contenuto testuale è rapresentato dal argomento della funzione
 * @param{number} valore da inserire nel contenuto dell 'elemento html creato
 * return {HTML element/object} restituisce un nodo/elemento HTML 
*/
function newHtmlElement(textElement){
const element=document.createElement("div");
element.classList.add("square");
element.textContent=textElement;
return element;

}


/**
funzione che crea un array di numeri di lunghezza pari al argomento passato, al cui interno sono presenti valori random compresi tra 1 e l'argomento passato 
*@param{number} un numero che rapresenta la lunghezza dell'array 
 * 
 */
function createArray(arrayLength){
const arrayResult=[];
while(arrayResult.length<arrayLength){
const randomNumber=getRndInteger(1, arrayLength);
if(!arrayResult.includes(randomNumber))
arrayResult.push(randomNumber);
}
return arrayResult;
}



/**
funzione che prende in input due numeri e genera un numero casuale compreso tra questi due numeri
@param{number} input 2 numeri il limite inferiore,e il limite superiore 
@param{number} restituisce un numero random

* 
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
