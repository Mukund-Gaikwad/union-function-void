let cl = console.log;

// Union type 
//  we can assign more than one data type to a variable/function parameter by using union.

let age : number | string = 33;
cl(age);   // 33

age = 11;
cl(age);  // 11

age = "Eleven";
cl(age); // "Eleven"

// age = true;  // it gives error bcoz here we assign boolean

// custom type / type Aliases

// Type aliases allow you to create a new name for an existing type. OR
// Aliases doesn't actually create new type, it create new name to refer to that type
// type keyword is used for aliases
// we create own custom type

type Combination = number | string;
type ConvertDescription = 'as-number' | 'as-string'


function combine(n1:Combination, n2:Combination, ConvertResultType:ConvertDescription) {
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result= n1 + n2
        // resulttype = number 
    }else{
        result = n1.toString() + n2.toString();
        // resulttype = string 
    }
    
    if( ConvertResultType === 'as-number'){
        return +result
    }else{
        return result.toString()
    }
    // return result;
}

cl(combine(10,20,'as-number'), typeof combine(10,20,'as-number')); // 30 'number'
cl(combine(20,'30','as-number'), typeof combine(20,'30','as-number')); // 2030 'number'
cl(combine(30,'40','as-string'), typeof combine(30,'40','as-string')); //3040 string

// let comb1 = combine(10,20,'as-number')
// cl(comb1, typeof comb1) // 30 'number'

// let comb2 = combine(20,'30,'as-number')
// cl(comb2, typeof comb2) // 2030 'number'

// let comb3 = combine(30,'40,'as-string')
// cl(comb3, typeof comb3) // 3040 'string'

// :::::::::::::::::::::::::::::::::::::: function return type (assign datatype to function):::::::::::::::::::::::::::::::

// here we assign data type to the function
function add(n1: number, n2: number):number{
    return n1 + n2;
}
cl(add(25,25));
// cl(add(25,"two"));  // error n2 number set

// add(25,25);

function add2(n1:number, n2:number): string{
    // return (n1 + n2).toString() 
    return (n1.toString() + n2.toString());
}
cl(add2(25,25));


// :::::::::::::::::::::::::::::::::::::::::::::: void :::::::::::::::::::::::::::::::::::::::::::

// if function does not return anything then its data type is "void"
// if we use void type then we cant return function

function add3(n1:number, n2:number):void{
    // return (n1 + n2);  // if return use its shows error 
    cl(n1 + n2)
}
add3(50,50);

// if function has no return keyword then it gives void as datatype
function printName():void{
    cl("Hello Typescript");
}
printName();
