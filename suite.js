/**
 * @class Suite
 * Describes a test suite
 */
class Suite{
    /**
     * constructor
     * @param {String} name
     *  name of the test suite
     */
    constructor(name){
        this.name = name;
    }
    /**
     * defines a function that runs before each test
     * @param {Function} pre
     *  function to run before each test
     */
    setup(pre){
        if(typeof pre !== "function")throw "Setup requires a function type";
        this.pre = pre;
    }
    /**
     * Adds a test to the test suite
     * @param {String} name
     *  name of the test
     *  
     * @param {Function} test 
     *  test function to run
     */
    addTest(name, test){
        if(!test)test = name;
        if(typeof test !== "function")throw "Test must be a function";
        if(!this.tests)this.tests = [];
        this.tests.push({
            test: test,
            name: name
        });
    }
    /**
     * defines a function to run after each test
     * @param {Function} func 
     *  function to run after each test
     */
    cleanup (func) {
        this.post = func;
    }
    /**
     * runs the test suite
     */
    run(){
        if(!this.tests)throw "No tests";
        console.log("Running test suite:", this.name);
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
}

module.exports = Suite;

