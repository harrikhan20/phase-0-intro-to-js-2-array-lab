// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.push("Ralph");
}


function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    let newCatOrder = [...cats, "Broom"];
    return newCatOrder;
    
}

function prependCat(){
    let newCatOrder = ["Arnold", ...cats];
    return newCatOrder;
}

function removeLastCat(){
    return cats.slice(0, -1);
    
    
}

function removeFirstCat(){
    return cats.slice(1);
}
//function destructivelyAppendCat(name){
//    cats.push(name);
//}

//destructivelyAppendCat("Milo", "Otis", "Garfield");
//function destructivelyPrependCat(name){
//    cats.unshift(name);
//}
//function destructivelyRemoveLastCat(){
//    cats.pop();
//}

//destructivelyRemoveLastCat();
//function destructivelyRemovefirstCat(){
//   cats.shift('Milo');
//}



//function destructivelyRemoveLastCat(){
//    cats.shift("Milo");
//}

//function destructivelyRemoveFirstCat(){
  //  cats.shift('Milo');

//}

//function appendCat(name){
//    return ["Milo", "Otis", "Garfield", "Broom"];
//}

//appendCat("Broom");
//function prependCat(name){
//    return ["Arnold", "Milo", "Otis", "Garfield"];
//}

//prependCat("Arnold");
//function removeLastCat(){
//    return cats.slice(0, 2);
//}

//removeLastCat();
//function removeFirstCat(){
//    return cats.slice(1);
//}


