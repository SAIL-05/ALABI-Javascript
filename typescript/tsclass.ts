//let myname:string = "funmi" (this is annotation)
// union 
//let secname= "jackson"  (this is by inference)
function addTwoNumbers (a: number, b: number){
    return a+b
}

function calculateInRate (p:number, r: number, t:number/100){
    return ( (p*r*t)/100)
}
function getUserName(){
    let username : any = prompt(`Enter your username`)

}
// create a function with four parameters, the function  should return  a number.
//  to check which number is higher

function toCheckTheHighest (a:number, b:number, c:number, d:number):number
{
 return Math.max(a,b,c,d)
}


// with object
let studentData:{name:string, grade: string, score:number, pass:boolean
    = {
        Name:"ife"
        grade:"A"
        score: 89
        pass:true,
    };
    let studentInfo: {name:string, score:number,course?:string }={
        name:"ife"
        score:90,
    }

}
//this interface is reuseable, ? means i can asign inside or outside. 
interface studentDataType{
    name?:string;
    grade?:string;
    score?:number;
    pass?:true
}

let studentobject: studentDataType = {}
let studentobject2: studentDataType = {}
let studentobject2: studentDataType = {}
let studentobject4: studentDataType = {}