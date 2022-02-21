function test(a, b){ return a + b} 
console.log(test("Hola", " Mundo")); 
console.log(test(1, 99)); 
var myPromise = new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve('Hola'); }, 3000); }); 
myPromise.then(function(value) { console.log(value); }); 
console.log(myPromise);
 function unSegDespues(otraFunc) { setTimeout(otraFunc, 1000); }
unSegDespues(() => { 
    console.log(1); 
    unSegDespues(() => { 
        console.log(2); 
        unSegDespues(() => console.log(3)); 
    }); 
});
 unSegDespues.then
