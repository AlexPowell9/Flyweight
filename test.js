let assert = require("./assert");
let test = require("./suite");

let tests = new test("Assert");

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
