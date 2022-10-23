import message from "./justAnotherJSFile"

// Test new Branch
interface testObject{
    author: String,
    id: number,
    testObject: {}|null
}


let firstFunc = (testParam:testObject)=>{
console.log(testParam,message)
}

let testObject={
    author:"testing",
    id:123,
    testObject:{name:"4dobo"}
}

firstFunc(testObject)