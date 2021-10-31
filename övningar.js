
//alt two

function addNumber(a,b){

    console.log(a+b)

}

addNumber (12, 40);

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

document.querySelector(".summa").textContent= calculate (140, 60) 

var count =  (a, b) => {
    console.log (a+ b)
    return a + b
}

count(10,30)

//5.

var username = "Kingstedt"
function skrivaUtname() {
    username= "Kingstedt"
}

skrivaUtname ();
console.log(username);

// 6. task for resvere namne (string)

const name = "Kingstedt";
// split ()
let convertedName = name.split("")
console.log(convertedName); 
const reversedName= convertedName.reverse();
const stringName = reversedName.join("")
console.log(stringName);


// git init 
// git add .

// 7.1  Remove my list 
// 

function myFunction() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[1]);
}
//  7.2 add

const addCoffee = () => {

const cappuccino = document.createElement('li')
cappuccino.textContent = "Cappuccino"
const coffee = document.getElementById('coffee')
coffee.appendChild(cappuccino)
}
//8

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("Kingstedt");
  console.log(reverseString)

//9
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase(). replace(re, ''); 
    var len = str.length; 
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 -i]) {
            return false;
        }
    }
    return true;
}
palindrome("Kingstedt")


// 10

function myFunction_1() {
    let str = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = str.replace("Havard University", "Medieinstitutet");;
}
