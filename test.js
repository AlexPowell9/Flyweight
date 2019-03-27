let assert = {
    ok: (bool, msg) => {
        if(bool){
            return;
        }
        throw msg || "Assertion Error: Ok" 
    },
    equals: (a, b, msg) => {
        if(a == b){
            return;
        }
        throw msg || "Assertion Error: Equals"
    },
    strictEquals: (a, b, msg) => {
        if(a === b){
            return;
        }
        throw msg || "Assertion Error: Strict Equals"
    }
}

let test = {
    unit: (testName, test, v) => {
        try{
            test();
            console.log(testName, " passed")
        }
        catch(e){
            if(v){
                console.log(testName, " failed", e);
            }
            else{
                console.log(testName, " failed")
            }
        }
    }
}