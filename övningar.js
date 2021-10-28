
// 1. tasks 
/*
var a = 12;
var b = 13;
console.log(a + b) 
*/ 
//alt two
/*
function addNumber(a,b){

    console.log(a+b)

}

addNumbers (12, 40)
*/
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* for(var i=0; i<lista.length; i+=2){
    console.log(lisa[i])
}
*/
for (var i=0; i<lista.length; i++)

{
    //if()
    if (lista[i]%2==0){
        console.log(lista[i], "equal number")
    }
   else console.log(lista[i], "odd number")
}


// 3. tasks for map.

    for(var i= 0; i<lista.length; i++)
    {

        console.log (lista[i])

    }

    lista.map (  (e) => console.log(e))

    // 4. tasks for calculate

    function calculate (a, b){
        return a+b; 
    }

    const summa= document.querySelector (".summa")

document.querySelector(".summa").textContent= calculate (140, 50) 

var count =  (a, b) => {
    console.log (a+ b)
    return a + b
}

count(10,30)