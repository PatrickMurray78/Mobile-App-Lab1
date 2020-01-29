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

function count(value: string, spaces?: boolean): number {
    let length: number;
    if(spaces == false)
    {
        length = value.replace(/\s/g, "").length;
    }
    else 
    {
        length = value.length;
    }
    return length;
}

let myCount1: number = count("Hello World");
console.log(myCount1);
let myCount2: number = count("Hello World", false);
console.log(myCount2);

