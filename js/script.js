console.log("pagina js collegata");
//task 1 creare un array di 100 elementi 
const squareBox=document.getElementById("grid");

const selectInput=document.getElementById("level-input");
const btnGenerator=document.getElementById("btn-gen");
console.log(selectInput)
console.log(selectInput.value,typeof(selectInput.value));

btnGenerator.addEventListener("click",function(){
squareBox.innerHTML="";
const arrayLenght=convertSelectInput(selectInput.value);
const arraySquare=createArray(arrayLenght);
for(let i=0;i<arraySquare.length;i++){
const nodeHtml=newHtmlElement(arraySquare[i],selectInput.value);
nodeHtml.addEventListener("click",handleDivClick);
squareBox.append(nodeHtml);
}
})




/**
 *funzione che controlla input del select e a seconda dei casi lo converte in un numero che costituisce il numero di celle della griglia 
 * @param{string} la proprieta del value del nodo html select
*@return {number} numero che rapresenta il numero di elementi nella griglia
 */
function convertSelectInput(selectValue){
    let numElement=0;
        if(selectValue==="difficolta-2")
         numElement=81;   
        else if(selectValue=== "difficolta-3")
        numElement=49;
        else if (selectValue==="difficolta-1")
        numElement=100; 
        
        return numElement;
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
 * @param{string} stringa che rapresenta il valore del select input che a seconda dei casi assumera valori diversi a cui corrispondoni classi diverse
 * return {HTML element/object} restituisce un nodo/elemento HTML 
*/
function newHtmlElement(textElement,classBasis){
const element=document.createElement("div");
element.classList.add("square-common");
const classStructure="";
if(classBasis==="difficolta-1"){
    classStructure= "square-1"
}
else if(classBasis==="difficolta-2")
classStructure="square-2"
else if(classBasis==="difficolta-3")
classStructure="square-3"

element.classList.add(classStructure);


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
for(let i=0;i<arrayLength;i++){
    arrayResult.push(i+1);
}

return arrayResult;
}



/**
funzione che prende in input due numeri e genera un numero casuale compreso tra questi due numeri
@param{number} input 2 numeri il limite inferiore,e il limite superiore 
@param{number} restituisce un numero random

* 
 */

  
