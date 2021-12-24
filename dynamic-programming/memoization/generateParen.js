/**
 * Time Complexity O(2^n)
 *
 */
const generateParen = (n) => {
    const res = [];

    const buildParen = (oc, cc, s) =>{
        if(oc === n && cc ===n) res.push(s);

        if(oc < n ) buildParen(oc+1, cc, s+'(');
        if(cc < oc ) buildParen(oc, cc+1, s+')');
    }

    buildParen(0, 0, '');
    return res;
}

console.log(generateParen(1)); //[ '()' ]
console.log(generateParen(2)); //[ '(())', '()()' ]
console.log(generateParen(3)); //[ '((()))', '(()())', '(())()', '()(())', '()()()' ]
