let assert = {
    ok: (bool, msg) => {
        if(bool){
            return;
        }
        throw msg || "Assertion Error: Ok";
    },
    equal: (a, b, msg) => {
        if(a == b){
            return;
        }
        throw msg || "Assertion Error: Equal";
    },
    strictEqual: (a, b, msg) => {
        if(a === b){
            return;
        }
        throw msg || "Assertion Error: Strict Equal";
    },
    notEqual: (a, b, msg) => {
        if(a != b){
            return;
        }
        throw msg || "Assertion Error: Equal";
    },
    notStrictEqual: (a, b, msg) => {
        if(a !== b){
            return;
        }
        throw msg || "Assertion Error: Not Strict Equal";
    },
    fails: (func, msg) => {
        try{
            func();
            throw msg || "Assertion Error: fails";
        }
        catch(e){
            return;
        }
    },
    succeeds: (func, msg) => {
        try{
            func();
            return;
        }
        catch(e){
            throw msg || "Assertion Error: succeeds";
        }
    }
}

let test = {
    Suite: () => {
        return {
            setup: (func) => {
                this.pre = func;
            },
            addTest: (name, test) => {
                if(!name)throw "Test needs a name";
                if(!test)throw "No function supplied";
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
                        test.test();
                        console.log(test.name, " passed");
                    }
                    catch(e){
                        console.log(test.name, " failed");
                    }
                    if(this.post)this.post();
                });
            }
        };
    }
}

let tests = test.Suite("Assert");

tests.setup(() => {
    console.log("setup")
});

tests.addTest("ok", () => {
    assert.ok(true);
});

tests.addTest("equal", () => {
    assert.equal(1, "1");
});

tests.addTest("strictEqual", () => {
    assert.strictEqual(1, 1);
});

tests.addTest("notEqual", () => {
    assert.notEqual(1, 2);    
});

tests.addTest("notStrictEqual", () => {
    assert.notStrictEqual(1, "1");
});

tests.addTest("fails", () => {
    assert.fails(() => {
        throw "error";
    });
});

tests.addTest("succeeds", () => {
    assert.succeeds(() => {
        return;
    });
})

tests.cleanup(() => {
    console.log("cleanup")
})

tests.run();