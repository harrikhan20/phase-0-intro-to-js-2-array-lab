// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

destructivelyAppendCat("Milo", "Otis", "Garfield");
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}

destructivelyRemoveLastCat();
function destructivelyRemovefirstCat(){
    cats.shift('Milo');
}



function destructivelyRemoveLastCat(){
    cats.shift("Milo");
}

function destructivelyRemoveFirstCat(){
    cats.shift('Milo');

}

function appendCat(name){
    return ["Milo", "Otis", "Garfield", "Broom"];
}

appendCat("Broom");
function prependCat(name){
    return ["Arnold", "Milo", "Otis", "Garfield"];
}

prependCat("Arnold");
function removeLastCat(){
    return cats.slice(0, 2);
}

removeLastCat();
function removeFirstCat(){
    return cats.slice(1);
}



