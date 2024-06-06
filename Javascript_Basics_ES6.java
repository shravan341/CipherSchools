var x = 15
{
    let x = 5;
    console.log(x);   // we can change the const value 
    // const x = 5;
}

console.log(x);

var x= function(x,y){
    return x+y;
};

console.log(x(5,7))
var x= (x,y)=>{
    return x+y;
};


// const y = (x,y)=>x+y;
// console.log(y(5,7))

const q1 =["jan", "feb","march"]
const q2 =["april", "may","june"]
const q3 =["july", "aug","sept"]
const q4 =["oct", "nov","dec"]

const year = [...q1,...q2,...q3, ...q4]
console.log(year);

//gives maximum value
const myNumber = [28,11,45,78];
let maxValue = Math.max(...myNumber);

console.log(maxValue);

let sum=0;
for(let num of myNumber){
    sum = sum+num;
}

console.log(sum);

const fruits = new Map([["apples", 500], ["banana", 900]]);
console.log(fruits);
console.log(fruits.get("apples"));


// const letters = new set();

// letters.add("a");
// letters.add("b");
// letters.add("a");

// console.log(letters);

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("a");

console.log(letters);


class car{

    constructor(name, mfgyear){
        this.name = name;
        this.mfgyear = mfgyear;
    }
}

const mycar1 = new car("mercides",2000);
const mycar2 = new car("mercides",2000);

console.log(mycar1, mycar2);


const myFunction=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("this is inside promise");
            resolve();
        }, 2000);
    });
};


myFunction()
    .then(()=>{
        console.log("Resolved");
    })
    .catch(()=>{
        console.log("Rejected");
    });

    const person={
        firstName: "Shravan",
        lastName :"Kumar",
        age:30,
        eyeColor:"blue",
    };

    let id = Symbol("id");
    person[id] = 14000;

    console.log(person);
