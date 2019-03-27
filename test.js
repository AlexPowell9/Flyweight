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
    Suite: () => {
        return {
            setup: (func) => {
                this.pre = func;
            },
            addTest: (name, test) => {
                if(!this.tests)this.tests = [];
                this.tests.push({
                    test: test,
                    name: name
                });
            },
            cleanup: (func) => {
                this.post = func;
            },
            run:() => {
                if(!this.tests)throw "No tests";
                this.tests.forEach((test) => {
                    if(this.pre)this.pre();
                    try{
                        test();
                        console.log(test.name, " passed");
                    }
                    catch(e){
                        console.log(test.name, " failed");
                    }
                    if(this.post)this.post();
                });
            }
        }
    }
}