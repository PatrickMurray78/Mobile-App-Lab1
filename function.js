/*function count(value) {
    let length:number = value.length;
    console.log(value + " contains " + length + " characters");
}

console.log(count("Hello World"));

function countWithoutSpace(value) {
    let length: number = value.replace(/\s/g, "").length;
    
    console.log(value + " contains " + length + " characters");
}
    
console.log(countWithoutSpace("Hello World"));*/
function count(value, spaces) {
    var length;
    if (spaces == false) {
        length = value.replace(/\s/g, "").length;
    }
    else {
        length = value.length;
    }
    return length;
}
var myCount1 = count("Hello World");
console.log(myCount1);
var myCount2 = count("Hello World", false);
console.log(myCount2);
