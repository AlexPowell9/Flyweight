let assert = {
    /**
     * checks if first parameter is true, throws error if false
     * @param bool 
     * boolean value to check, if true returns else throws error
     * 
     * @param msg 
     * custom message for thrown error
     */
    ok: (bool, msg) => {
        if(bool){
            return;
        }
        throw msg || "Assertion Error: Ok";
    },
    /**
     * checks if first two parameters are equal, throws error otherwise
     * @param a 
     * @param b
     * values to compare for equality, return if values are equal, uses equals here
     * 
     * @param msg
     * custom message for thrown error
     */
    equal: (a, b, msg) => {
        if(a == b){
            return;
        }
        throw msg || "Assertion Error: Equal";
    },
    /**
     * checks if first two parameters are equal with strict equality, throws error otherwise
     * @param a
     * @param b
     * values to compare for equality, return if values are equal, uses strict equals here     
     * 
     * @param msg
     * custom message for thrown error
     */
    strictEqual: (a, b, msg) => {
        if(a === b){
            return;
        }
        throw msg || "Assertion Error: Strict Equal";
    },
    /**
     * checks if first two parameters are not equal, throws otherwise
     * @param a
     * @param b
     * values to compare for equality, return if values are not equal, uses not equals here     
     * 
     * @param msg
     * custom message for thrown error
     */
    notEqual: (a, b, msg) => {
        if(a != b){
            return;
        }
        throw msg || "Assertion Error: Equal";
    },
    /**
     * checks if first two parameters are not equal using strict not equals, throws error otherwise
     * @param a
     * @param b
     * values to compare for equality, return if values are not equal, uses strict not equals here     
     * 
     * @param msg
     * custom message for thrown error
     */
    notStrictEqual: async (a, b, msg) => {
        if(a !== b){
            return;
        }
        throw msg || "Assertion Error: Not Strict Equal";
    },
    /**
     * checks if first parameter throws an error, if function returns successfully throws an error
     * @param {Function} func
     * function to test, if function throws error return, else return 
     * 
     * @param msg 
     * custom message for thrown error
     */
    fails: (func, msg) => {
        try{
            func();
            throw msg || "Assertion Error: fails";
        }
        catch(e){
            return;
        }
    },
    /**
     * checks if first parameter runs successfully, throws an error otherwise
     * @param {Function} func
     * function to test, if function does not throw error return, else throw error
     * 
     * @param msg 
     * custom message for thrown error
     */
    succeeds: async (func, msg) => {
        try{
            await func();
            return;
        }
        catch(e){
            throw msg || "Assertion Error: succeeds";
        }
    }
}

module.exports = assert;

